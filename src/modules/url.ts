import { Currency } from 'modules/currency';

export const buildURI = (
  location: string | undefined,
  queries: { [key: string]: string | number },
): string => {
  const params = Object.keys(queries)
    .map(key => `${key}=${queries[key]}`)
    .join('&');

  return encodeURI(`${location}?${params}`);
};

export const fetchCurrencyFromURL = (): Currency | undefined => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('rate') && params.has('festival') && params.has('name')) {
    return {
      rate: Number(params.get('rate')) || 1,
      festival: params.get('festival') || '',
      name: params.get('name') || '',
      id: Date.now(),
    };
  }
  return;
};
