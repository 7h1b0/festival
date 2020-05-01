const PREFERENCES = 'lastUsedFestival';

export function setAsLastUsed(festivalId: string) {
  return localStorage?.setItem(PREFERENCES, festivalId);
}

export function getLastUsed() {
  return localStorage?.getItem(PREFERENCES);
}
