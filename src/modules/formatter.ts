export function formatPrice(number: number, separator = ' '): string {
  if (isNaN(number)) {
    return '-';
  }
  return `${round(number)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, () => separator)}`;
}

export function formatRate(
  rate: number,
  currencyOrigin: string,
  currencyTarget: string,
  amount = 1,
): string {
  return `${amount} ${currencyOrigin} = ${formatPrice(
    amount * rate,
  )} ${currencyTarget}`;
}

export function round(value: number): number {
  return Math.round(value * 100) / 100;
}
