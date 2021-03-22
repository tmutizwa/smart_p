import { promises as fs } from 'fs';
import path from 'path';

import { getLogsSummary, getRawLogs } from './logSummary';
import { fakeLog, parsedFakeLog } from './fakeLogs';

describe('logParser', () => {
  it('should parse logs correctly', () => {
    const logs = getRawLogs(fakeLog);
    expect(logs).toEqual(parsedFakeLog);
  });
});

describe('LoadLogs', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should read logs from file', async () => {
    jest.spyOn(fs, 'readFile').mockResolvedValue('fake log');

    await getLogsSummary();

    expect(fs.readFile).toHaveBeenCalledWith(
      path.join(__dirname, 'webserver.log'),
      'utf8'
    );
  });

  it('should throw an error when it fails to read the log file', async () => {
    jest.spyOn(fs, 'readFile').mockRejectedValue('Some error');

    expect.assertions(1);

    try {
      await getLogsSummary();
    } catch {
      expect(fs.readFile).toHaveBeenCalledWith(
        path.join(__dirname, 'webserver.log'),
        'utf8'
      );
    }
  });

  it('should get the correct summary for total views', async () => {
    jest.spyOn(fs, 'readFile').mockResolvedValue(fakeLog);
    const expectedSummary = {
      '/help_page/1': 4,
      '/contact': 3,
      '/home': 2,
      '/about/2': 1,
    };
    const logSummary = await getLogsSummary('totalViews');

    expect(logSummary).toEqual(expectedSummary);
  });

  it('should get the correct summary for unique views', async () => {
    jest.spyOn(fs, 'readFile').mockResolvedValue(fakeLog);
    const expectedSummary = {
      '/help_page/1': 3,
      '/contact': 1,
      '/home': 2,
      '/about/2': 1,
    };
    const logSummary = await getLogsSummary('uniqueViews');

    expect(logSummary).toEqual(expectedSummary);
  });
});
