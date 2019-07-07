import { Currency } from './currency';

const CURRENCIES = 'currencies';
const PREFERENCES = 'lastUsedCurrency';

export function store(data: Currency[]): void {
  console.log('store called');
  localStorage.setItem(CURRENCIES, JSON.stringify(data));
}

export function getAllCurrencies(): Currency[] {
  console.log('getAllCurrencie called');
  const store = localStorage.getItem(CURRENCIES);
  return (store && JSON.parse(store)) || [];
}

export function setAsLastUsed(id: number) {
  console.log('setAsLastUsed called');
  return localStorage.setItem(PREFERENCES, '' + id);
}

export function getLastUsed() {
  console.log('getLastUsed called');
  return parseInt(localStorage.getItem(PREFERENCES) || '', 10);
}
