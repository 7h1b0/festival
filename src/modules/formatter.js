export function formatPrice(number, separator = ' ') {
  if (isNaN(number)) {
    return '-';
  }
  const roundNumber = Math.round(number * 100) / 100;
  return `${roundNumber
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, () => separator)}`;
}

export function formatRate(rate, currencyOrigin, currencyTarget, amount = 1) {
  return `${amount} ${currencyOrigin} = ${formatPrice(
    amount * rate,
  )} ${currencyTarget}`;
}

export function round(value) {
  return Math.round(value * 100) / 100;
}
