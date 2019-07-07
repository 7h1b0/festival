export const buildURI = (
  location: string | undefined,
  queries: { [key: string]: string | number },
): string => {
  const params = Object.keys(queries)
    .map(key => `${key}=${queries[key]}`)
    .join('&');

  return encodeURI(`${location}?${params}`);
};

function fetchCurrencyFromLocation(): void {
  const params = new URLSearchParams(window.location.search);
  if (params.has('rate') && params.has('festival') && params.has('name')) {
    const sharedCurrency = {
      rate: Number(params.get('rate')) || 1,
      festival: params.get('festival') || '',
      name: params.get('name') || '',
      id: Date.now(),
    };

    addCurrency(sharedCurrency);
    setAsLastUsed(sharedCurrency.id);
  }
}
