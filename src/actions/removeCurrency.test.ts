import removeCurrency from './removeCurrency';

describe('#removeCurrency', () => {
  it('should return a correct object', () => {
    expect(removeCurrency(1)).toEqual({ type: 'remove', value: 1 });
  });
});
