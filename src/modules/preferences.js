const KEY = 'lastUsedCurrency';

export function setAsLastUsed(name) {
  return localStorage.setItem(KEY, name);
}

export function getLastUsed() {
  return localStorage.getItem(KEY);
}
