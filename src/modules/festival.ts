import type { Festival } from 'src/festivals';

export default function getFestivalFromSearchLocation(
  search: string,
): Festival {
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get('name');
  const currency = searchParams.get('currency');
  const rate = searchParams.get('rate');

  if (isValidFestival(name, currency, rate)) {
    // @ts-ignore name and currency are string here
    return { name, currency, rate: Number(rate) };
  }
  throw new Error('No enough information to create a festival');
}

export function isValidFestival(
  name: string | null,
  currency: string | null,
  rate: string | null,
) {
  const isPositiveInteger = Number(rate) > 0;
  const isValidName = /[a-zA-Z0-9\s]{1,20}/.test(name || '');
  const isValidCurrency = /[a-zA-Z0-9\s]{1,20}/.test(currency || '');

  return isPositiveInteger && isValidName && isValidCurrency;
}
