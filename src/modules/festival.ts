import type { Festival } from 'src/festivals';

export default function getFestivalFromSearchLocation(
  search: string,
): Festival | null {
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get('name');
  const currency = searchParams.get('currency');
  const rate = searchParams.get('rate');

  if (isValidFestival(name, currency, rate)) {
    // @ts-ignore name and currency are string here
    return { name, currency, rate: Number(rate) };
  }
  return null;
}

export function isValidFestival(
  name: string | null,
  currency: string | null,
  rate: string | null,
) {
  const regexStr = /[\w\s]{1,20}/;
  const isPositiveInteger = Number(rate) > 0;
  const isValidName = regexStr.test(name || '');
  const isValidCurrency = regexStr.test(currency || '');

  return isPositiveInteger && isValidName && isValidCurrency;
}
