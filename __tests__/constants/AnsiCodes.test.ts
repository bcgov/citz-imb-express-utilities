import { ANSI_CODES } from '@/constants';

// Test suite for ANSI_CODES
describe('ANSI_CODES', () => {
  // Test case: FOREGROUND colors
  it('should have correct FOREGROUND codes', () => {
    expect(ANSI_CODES.FOREGROUND.BLACK).toBe('\x1b[30m');
    expect(ANSI_CODES.FOREGROUND.RED).toBe('\x1b[31m');
    expect(ANSI_CODES.FOREGROUND.GREEN).toBe('\x1b[32m');
    expect(ANSI_CODES.FOREGROUND.GOLD).toBe('\x1b[33m');
    expect(ANSI_CODES.FOREGROUND.BLUE).toBe('\x1b[34m');
    expect(ANSI_CODES.FOREGROUND.PURPLE).toBe('\x1b[35m');
    expect(ANSI_CODES.FOREGROUND.CYAN).toBe('\x1b[36m');
    expect(ANSI_CODES.FOREGROUND.WHITE).toBe('\x1b[37m');
    expect(ANSI_CODES.FOREGROUND.GREY).toBe('\x1b[1m\x1b[30m');
    expect(ANSI_CODES.FOREGROUND.PINK).toBe('\x1b[1m\x1b[31m');
    expect(ANSI_CODES.FOREGROUND.LIME).toBe('\x1b[1m\x1b[32m');
    expect(ANSI_CODES.FOREGROUND.YELLOW).toBe('\x1b[1m\x1b[33m');
    expect(ANSI_CODES.FOREGROUND.LIGHT_BLUE).toBe('\x1b[1m\x1b[34m');
    expect(ANSI_CODES.FOREGROUND.MAGENTA).toBe('\x1b[1m\x1b[35m');
    expect(ANSI_CODES.FOREGROUND.AQUA).toBe('\x1b[1m\x1b[36m');
  });

  // Test case: BACKGROUND colors
  it('should have correct BACKGROUND codes', () => {
    expect(ANSI_CODES.BACKGROUND.BLACK).toBe('\x1b[40m');
    expect(ANSI_CODES.BACKGROUND.RED).toBe('\x1b[41m');
    expect(ANSI_CODES.BACKGROUND.GREEN).toBe('\x1b[42m');
    expect(ANSI_CODES.BACKGROUND.GOLD).toBe('\x1b[43m');
    expect(ANSI_CODES.BACKGROUND.BLUE).toBe('\x1b[44m');
    expect(ANSI_CODES.BACKGROUND.PURPLE).toBe('\x1b[45m');
    expect(ANSI_CODES.BACKGROUND.CYAN).toBe('\x1b[46m');
    expect(ANSI_CODES.BACKGROUND.WHITE).toBe('\x1b[47m');
    expect(ANSI_CODES.BACKGROUND.GREY).toBe('\x1b[1m\x1b[40m');
    expect(ANSI_CODES.BACKGROUND.PINK).toBe('\x1b[1m\x1b[41m');
    expect(ANSI_CODES.BACKGROUND.LIME).toBe('\x1b[1m\x1b[42m');
    expect(ANSI_CODES.BACKGROUND.YELLOW).toBe('\x1b[1m\x1b[43m');
    expect(ANSI_CODES.BACKGROUND.LIGHT_BLUE).toBe('\x1b[1m\x1b[44m');
    expect(ANSI_CODES.BACKGROUND.MAGENTA).toBe('\x1b[1m\x1b[45m');
    expect(ANSI_CODES.BACKGROUND.AQUA).toBe('\x1b[1m\x1b[46m');
  });

  // Test case: FORMATTING codes
  it('should have correct FORMATTING codes', () => {
    expect(ANSI_CODES.FORMATTING.RESET).toBe('\x1b[0m');
    expect(ANSI_CODES.FORMATTING.BRIGHT).toBe('\x1b[1m');
    expect(ANSI_CODES.FORMATTING.DIM).toBe('\x1b[2m');
    expect(ANSI_CODES.FORMATTING.UNDERSCORE).toBe('\x1b[4m');
    expect(ANSI_CODES.FORMATTING.REVERSE).toBe('\x1b[7m');
    expect(ANSI_CODES.FORMATTING.ITALIC).toBe('\x1b[3m');
    expect(ANSI_CODES.FORMATTING.STRIKETHROUGH).toBe('\x1b[9m');
  });
});
