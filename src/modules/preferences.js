const KEY = 'defaultCurrency';

export function setAsDefault(name) {
  return () => localStorage.setItem(KEY, name);
}

export function getDefault() {
  return localStorage.getItem(KEY);
}
