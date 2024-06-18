import { serverStartupLogs } from '@/serverStartupLogs';
import { getCurrentDateTime } from '@/helpers';
import { ANSI_CODES } from '@/constants';

jest.mock('@/helpers', () => ({
  getCurrentDateTime: jest.fn(),
}));

// Test suite for serverStartupLogs
describe('serverStartupLogs', () => {
  const mockConsoleInfo = jest.spyOn(console, 'info').mockImplementation(() => {});
  const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

  const { FOREGROUND, FORMATTING } = ANSI_CODES;
  const NODE_VERSION = process.version;
  const NODE_ENV = 'test';

  beforeAll(() => {
    (getCurrentDateTime as jest.Mock).mockReturnValue({
      formattedDateUTC: '2024-06-14',
      formattedTimeUTC: '22:34:02',
      formattedDatePacific: '2024-06-14',
      formattedTimePacific: '15:34:02',
      pacificTimeZone: 'PDT',
    });
  });

  afterAll(() => {
    mockConsoleInfo.mockRestore();
    mockConsoleLog.mockRestore();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test case: Log the server startup message with port
  it('should log the server startup message with port', () => {
    serverStartupLogs(3000);

    expect(mockConsoleInfo).toHaveBeenCalledWith(
      `${FOREGROUND.LIGHT_BLUE}Express Server started on port ${FORMATTING.RESET}3000${FOREGROUND.LIGHT_BLUE}${FORMATTING.RESET}.`,
    );
  });

  // Test case: Log the server startup message without port
  it('should log the server startup message without port', () => {
    serverStartupLogs();

    expect(mockConsoleInfo).toHaveBeenCalledWith(
      `${FOREGROUND.LIGHT_BLUE}Express Server started${FORMATTING.RESET}.`,
    );
  });

  // Test case: Log the node version
  it('should log the node version', () => {
    serverStartupLogs();

    expect(mockConsoleInfo).toHaveBeenCalledWith(
      `${FOREGROUND.YELLOW}[NODE]${FORMATTING.RESET} Current version of node.js: ${NODE_VERSION}`,
    );
  });

  // Test case: Log the NODE_ENV environment
  it('should log the NODE_ENV environment', () => {
    serverStartupLogs();

    expect(mockConsoleInfo).toHaveBeenCalledWith(
      `${FOREGROUND.YELLOW}[NODE]${FORMATTING.RESET} Current NODE_ENV environment: ${NODE_ENV}`,
    );
  });

  // Test case: Log the UTC date and time
  it('should log the UTC date and time', () => {
    serverStartupLogs();

    expect(mockConsoleInfo).toHaveBeenCalledWith(
      `${FOREGROUND.YELLOW}[UTC]${FORMATTING.RESET} Current date and time: 2024-06-14, 22:34:02`,
    );
  });

  // Test case: Log the Pacific Time date and time
  it('should log the Pacific Time date and time', () => {
    serverStartupLogs();

    expect(mockConsoleInfo).toHaveBeenCalledWith(
      `${FOREGROUND.YELLOW}[PDT]${FORMATTING.RESET} Current date and time: 2024-06-14, 15:34:02`,
    );
  });
});
