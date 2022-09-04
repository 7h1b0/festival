import { getFestivalFromSearchLocation } from './utils';

describe('getFestivalFromSearchLocation', () => {
  it('should return the festival and status success containing in URL', () => {
    expect(
      getFestivalFromSearchLocation(
        '?name=Javascript&eur=30&value=10&currency=Closure',
      ),
    ).toEqual({
      status: 'success',
      data: {
        name: 'Javascript',
        currency: 'Closure',
        rate: 3,
      },
    });
  });

  it('should return status partial if eur or value are missing', () => {
    expect(
      getFestivalFromSearchLocation('?name=Jest&currency=Closure'),
    ).toEqual({
      status: 'partial',
      data: { name: 'Jest', currency: 'Closure' },
    });
  });

  it('should return status missing if properties are missing', () => {
    expect(
      getFestivalFromSearchLocation('?eur=3&value=1&currency=Closure'),
    ).toEqual({
      status: 'missing',
      data: null,
    });
  });

  it('should ignore additional property', () => {
    expect(
      getFestivalFromSearchLocation(
        '?name=Javascript&eur=30&value=10&currency=Closure&hacker=true',
      ),
    ).toEqual({
      status: 'success',
      data: {
        name: 'Javascript',
        currency: 'Closure',
        rate: 3,
      },
    });
  });
});
