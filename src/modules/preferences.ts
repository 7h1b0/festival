const PREFERENCES = 'lastUsedFestival';

export function setAsLastUsed(festivalSlug: string) {
  return localStorage?.setItem(PREFERENCES, festivalSlug);
}

export function removeLastUsed() {
  return localStorage?.removeItem(PREFERENCES);
}

export function getLastUsed() {
  return localStorage?.getItem(PREFERENCES);
}
