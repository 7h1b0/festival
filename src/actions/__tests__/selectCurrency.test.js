import selectCurrency from '../selectCurrency';

describe('#selectCurrency', () => {
  it('should return a correct object', () => {
    expect(selectCurrency('test')).toEqual({ type: 'select', value: 'test' });
  });
});
