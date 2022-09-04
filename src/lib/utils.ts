import type { Festival } from '../festival';

type Output =
  | { status: 'success'; data: Festival }
  | { status: 'partial'; data: { name: string; currency: string } }
  | { status: 'missing'; data: null };

export function getFestivalFromSearchLocation(search: string): Output {
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get('name');
  const currency = searchParams.get('currency');
  const euro = searchParams.get('eur');
  const value = searchParams.get('value');

  const isValidFestivalName = isValidString(name);
  const isValidFestivalCurrency = isValidString(currency);
  const isValidEuro = isValidNumber(Number(euro));
  const isValidValue = isValidNumber(Number(value));

  const isValidFestival = isValidFestivalName && isValidFestivalCurrency;
  const isValidFestivalAndCurrency =
    isValidFestival && isValidEuro && isValidValue;

  if (isValidFestivalAndCurrency) {
    const festival = { name, currency, rate: Number(euro) / Number(value) };
    return { status: 'success', data: festival };
  }

  if (isValidFestival) {
    return { status: 'partial', data: { name, currency } };
  }

  return { status: 'missing', data: null };
}

function isValidString(params: string | null): params is string {
  const regexStr = /[\w\s]{1,20}/;
  return regexStr.test(params || '');
}

function isValidNumber(params: number | null): params is number {
  return Number(params) > 0;
}
