import type { Festival } from '../festival';

export function getFestivalFromSearchLocation(search: string): Festival | null {
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get('name');
  const currency = searchParams.get('currency');
  const euro = searchParams.get('euro');
  const value = searchParams.get('value');

  if (isValidFestival(name, currency, euro, value)) {
    // @ts-ignore name and currency are string here
    return { name, currency, rate: Number(euro) / Number(value) };
  }
  return null;
}

function isValidFestival(
  name: string | null,
  currency: string | null,
  euro: string | null,
  value: string | null,
) {
  const regexStr = /[\w\s]{1,20}/;
  const isValidEuro = Number(euro) > 0;
  const isValidValue = Number(value) > 0;
  const isValidName = regexStr.test(name || '');
  const isValidCurrency = regexStr.test(currency || '');

  return isValidEuro && isValidValue && isValidName && isValidCurrency;
}
