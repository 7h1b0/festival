import { Currency } from './currency';

const NAMESPACE = 'currencies';

export function store(data: Currency[]): void {
  localStorage.setItem(NAMESPACE, JSON.stringify(data));
}

export function getAllCurrencies(): Currency[] {
  const store = localStorage.getItem(NAMESPACE);
  return (store && JSON.parse(store)) || [];
}

export function addCurrency(currency: Currency): void {
  const currencies = getAllCurrencies();
  store([...currencies, currency]);
}
