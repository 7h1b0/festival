import removeCurrency from '../removeCurrency';

describe('#removeCurrency', () => {
  it('should return a correct object', () => {
    expect(removeCurrency('test')).toEqual({ type: 'remove', value: 'test' });
  });
});
