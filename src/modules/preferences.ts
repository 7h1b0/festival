const KEY = 'lastUsedCurrency';

export function setAsLastUsed(name: string) {
  return localStorage.setItem(KEY, name);
}

export function getLastUsed() {
  return localStorage.getItem(KEY);
}
