const PREFERENCES = 'lastUsedFestival';

export function setAsLastUsed(festivalId: number) {
  return localStorage?.setItem(PREFERENCES, '' + festivalId);
}

export function getLastUsed() {
  return parseInt(localStorage?.getItem(PREFERENCES) || '-1', 10);
}
