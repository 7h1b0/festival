import { round, formatPrice, formatRate } from './formatter';

describe.each([[1.2222, 1.22], [3.9, 3.9], [0, 0], [100.33333, 100.33]])(
  'round',
  (given, expected) => {
    it(`should return ${expected}`, () => {
      expect(round(given)).toBe(expected);
    });
  },
);

describe.each([
  [1000, '1 000'],
  [3.9, '3.9'],
  [undefined, '-'],
  [12345.6789, '12 345.68'],
])('formatPrice', (given, expected) => {
  it(`should return ${expected}`, () => {
    expect(formatPrice(given)).toBe(expected);
  });
});

describe.each([
  [1, 'EUR', 'USD', 2, '2 EUR = 2 USD'],
  [1.33, 'EUR', 'USD', 13, '13 EUR = 17.29 USD'],
])('formatRate', (rate, currencyOrigin, currencyTarget, amount, expected) => {
  it(`should return ${expected}`, () => {
    expect(formatRate(rate, currencyOrigin, currencyTarget, amount)).toBe(
      expected,
    );
  });
});
