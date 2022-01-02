import getFormatNumber from '../../components/Content/utils/getFormatNumber';

describe('format object', () => {
  it('rounding the number to display', () => {
    expect(getFormatNumber(Math.PI)).toBe('3.14');
  });
  it('rounding the number to display', () => {
    expect(getFormatNumber(Math.E)).toBe('2.72');
  });
  it('rounding the number to display', () => {
    expect(getFormatNumber(Math.SQRT2)).toBe('1.41');
  });
});
