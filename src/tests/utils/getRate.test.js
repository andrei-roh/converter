import getRate from 'components/Content/utils/getRate';

describe('format object', () => {
  it('return selected value', () => {
    expect(getRate(true, Math.PI, Math.E)).toBe(Math.E);
  });
  it('return selected value', () => {
    expect(getRate(false, Math.PI, Math.E)).toBe(Math.PI);
  });
});
