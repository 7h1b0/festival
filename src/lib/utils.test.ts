import { getFestivalFromSearchLocation } from './utils';

describe('getFestivalFromSearchLocation', () => {
  it('should return the festival containing in URL', () => {
    expect(
      getFestivalFromSearchLocation(
        '?name=Javascript&euro=30&value=10&currency=Closure',
      ),
    ).toEqual({
      name: 'Javascript',
      currency: 'Closure',
      rate: 3,
    });
  });

  it('should return null if properties are missing', () => {
    expect(
      getFestivalFromSearchLocation('?euro=3&value=1&currency=Closure'),
    ).toBeNull();
  });

  it('should ignore additional property', () => {
    expect(
      getFestivalFromSearchLocation(
        '?name=Javascript&euro=30&value=10&currency=Closure&hacker=true',
      ),
    ).toEqual({
      name: 'Javascript',
      currency: 'Closure',
      rate: 3,
    });
  });
});
