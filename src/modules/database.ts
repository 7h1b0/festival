import { Currency } from './currency';

const CURRENCIES = 'currencies';
const PREFERENCES = 'lastUsedCurrency';

export function store(data: Currency[]): void {
  localStorage.setItem(CURRENCIES, JSON.stringify(data));
}

export function getAllCurrencies(): Currency[] {
  const store = localStorage.getItem(CURRENCIES);
  return (store && JSON.parse(store)) || [];
}

export function addCurrency(currency: Currency): void {
  const currencies = getAllCurrencies();
  if (currencies.every(({ festival }) => festival !== currency.festival)) {
    store([...currencies, currency]);
  }
}

export function setAsLastUsed(id: number) {
  return localStorage.setItem(PREFERENCES, '' + id);
}

export function getLastUsed() {
  return parseInt(localStorage.getItem(PREFERENCES) || '', 10);
}
