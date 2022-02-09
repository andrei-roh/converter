import getCurrentcyName from 'components/Content/utils/getCurrencyName';

describe('get correct variable', () => {
  it('return correct value', () => {
    expect(getCurrentcyName('Евро')).toBe('euro');
  });
  it('return correct value', () => {
    expect(getCurrentcyName('Швейцарский франк')).toBe('swissFranc');
  });
});
