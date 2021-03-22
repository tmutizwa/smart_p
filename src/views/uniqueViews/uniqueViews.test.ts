import { displayUniqueViews } from './uniqueViews';
import { fakeUniqueViewsSummary } from '../../useCases/logSummary/fakeLogs';

describe('Unique Views display', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should log the data correctly', () => {
    const consoleMock = jest.fn();
    jest.spyOn(console, 'log').mockImplementation(consoleMock);

    displayUniqueViews(fakeUniqueViewsSummary);

    expect(consoleMock.mock.calls[0][0]).toMatchSnapshot();
    expect(consoleMock.mock.calls[1][0]).toMatchSnapshot();
  });
});
