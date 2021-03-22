import { displayTotalViews } from './totalViews';
import { fakeTotalViewsSummary } from '../../useCases/logSummary/fakeLogs';

describe('Total Views display', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should log the data correctly', () => {
    const consoleMock = jest.fn();
    jest.spyOn(console, 'log').mockImplementation(consoleMock);

    displayTotalViews(fakeTotalViewsSummary);

    expect(consoleMock.mock.calls[0][0]).toMatchSnapshot();
    expect(consoleMock.mock.calls[1][0]).toMatchSnapshot();
  });
});
