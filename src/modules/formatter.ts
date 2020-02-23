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
