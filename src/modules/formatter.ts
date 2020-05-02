const numberFormat = new Intl.NumberFormat(navigator.language ?? 'en-US', {
  style: 'decimal',
  maximumFractionDigits: 2,
});

export function formatPrice(number: number): string {
  if (isNaN(number)) {
    return '-';
  }
  return numberFormat.format(number);
}

export function formatRate(
  currencySource: string,
  currencyTarget: string,
  rate: number,
): string {
  return `1 ${currencySource} = ${formatPrice(rate)} ${currencyTarget}`;
}

export function round(value: number): number {
  return Math.round(value * 100) / 100;
}
