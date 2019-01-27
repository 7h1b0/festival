export function formatPrice(number, separator = ' ') {
  if (!number || number === 0 || isNaN(number)) {
    return '-';
  }
  const roundNumber = Math.round(number * 100) / 100;
  if (roundNumber === 0) return '-';

  return `${roundNumber
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, () => separator)} €`;
}
