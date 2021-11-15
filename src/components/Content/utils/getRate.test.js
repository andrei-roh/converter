import getRate from './getRate';

describe('format object', () => {
  it('return the selected value', () => {
    expect(getRate(true, Math.PI, Math.E)).toBe(Math.E);
  });
  it('return the selected value', () => {
    expect(getRate(false, Math.PI, Math.E)).toBe(Math.PI);
  });
});
