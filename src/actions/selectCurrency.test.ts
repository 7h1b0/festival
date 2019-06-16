import selectCurrency from './selectCurrency';

describe('#selectCurrency', () => {
  it('should return a correct object', () => {
    expect(selectCurrency(1)).toEqual({ type: 'select', value: 1 });
  });
});
