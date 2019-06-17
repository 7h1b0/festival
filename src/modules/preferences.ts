const NAMESPACE = 'lastUsedCurrency';

export function setAsLastUsed(id: number) {
  return localStorage.setItem(NAMESPACE, '' + id);
}

export function getLastUsed() {
  return parseInt(localStorage.getItem(NAMESPACE) || '', 10);
}
