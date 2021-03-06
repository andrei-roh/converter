import getFormatNumber from 'components/Content/utils/getFormatNumber';

describe('format object', () => {
  it('rounding a number to the display', () => {
    expect(getFormatNumber(Math.PI)).toBe(3.142);
  });
  it('rounding a number to the display', () => {
    expect(getFormatNumber(Math.E)).toBe(2.718);
  });
  it('rounding a number to the display', () => {
    expect(getFormatNumber(Math.SQRT2)).toBe(1.414);
  });
});
