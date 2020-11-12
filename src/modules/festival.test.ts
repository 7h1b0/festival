import getFestivalFromSearchLocation from './festival';

describe('getFestivalFromSearchLocation', () => {
  it('should return the festival containing in URL', () => {
    expect(
      getFestivalFromSearchLocation('?name=Javascript&rate=3&currency=Closure'),
    ).toEqual({
      name: 'Javascript',
      currency: 'Closure',
      rate: 3,
    });
  });

  it('should throw if there is property', () => {
    expect(() =>
      getFestivalFromSearchLocation('?rate=3&currency=Closure'),
    ).toThrow();
  });

  it('should ignore additional property', () => {
    expect(
      getFestivalFromSearchLocation(
        '?name=Javascript&rate=3&currency=Closure&hacker=true',
      ),
    ).toEqual({
      name: 'Javascript',
      currency: 'Closure',
      rate: 3,
    });
  });
});
