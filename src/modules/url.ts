export const buildURI = (
  location: string | undefined,
  queries: { [key: string]: string | number },
): string => {
  const params = Object.keys(queries)
    .map(key => `${key}=${queries[key]}`)
    .join('&');

  return encodeURI(`${location}?${params}`);
};
