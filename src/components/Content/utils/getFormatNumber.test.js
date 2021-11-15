import getFormatNumber from './getFormatNumber';

describe('format object', () => {
  it('rounding the number to display', () => {
    expect(getFormatNumber(Math.PI)).toBe('3.142');
  });
  it('rounding the number to display', () => {
    expect(getFormatNumber(Math.E)).toBe('2.718');
  });
  it('rounding the number to display', () => {
    expect(getFormatNumber(Math.SQRT2)).toBe('1.414');
  });
});
