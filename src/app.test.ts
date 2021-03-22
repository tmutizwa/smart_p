import { getLogsSummary } from './useCases';

jest.mock('./useCases', () => ({
  __esModule: true,
  getLogsSummary: jest.fn().mockResolvedValue({ '': 0 }),
}));

describe('Main app', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should display fetch the logs', () => {
    console.log = jest.fn();
    require('./app');

    expect(getLogsSummary).toHaveBeenNthCalledWith(1, 'totalViews');
  });

  it.skip('should call the display  summaries', () => {});
});
