import playerTimeFormatter from './player-time-formatter.js';

describe('playetTimeFormatter', () => {
  it('formats seconds to right time format', () => {
    const seconds = 256;
    expect(playerTimeFormatter(seconds)).toEqual('4:16');
  });

  it('formats 0:00 if undefined or null given', () => {
    expect(playerTimeFormatter(undefined)).toEqual('0:00');
    expect(playerTimeFormatter(null)).toEqual('0:00');
  });

  it('prevents float numbers to break formatting', () => {
    const seconds = 1637.2;
    expect(playerTimeFormatter(seconds)).toEqual('27:17');
  });
});
