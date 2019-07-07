import React from 'react';
import { getAllCurrencies, store } from 'modules/database';
import { setAsLastUsed, getLastUsed } from 'modules/database';
import { Currency } from 'modules/currency';

export type CurrenciesContext = {
  selectedCurrency: Currency;
  setSelectedCurrencyId: (currencyId: number) => void;
  currencies: Currency[];
  addCurrency: (currency: Currency) => void;
  removeCurrency: (currencyId: number) => void;
};

const initCurrency = { id: -1, rate: 0, name: '', festival: '' };
const initCurrencies = getAllCurrencies();
const lastUsedCurrency = getLastUsed();

const CurrenciesContext = React.createContext<CurrenciesContext>({
  selectedCurrency: initCurrency,
  setSelectedCurrencyId: () => {},
  currencies: [],
  addCurrency: () => {},
  removeCurrency: () => {},
});

export const useCurrencies = () => React.useContext(CurrenciesContext);

export const CurrenciesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currencies, setState] = React.useState(initCurrencies);
  const [selectedCurrencyId, setSelectedCurrencyId] = React.useState(
    lastUsedCurrency,
  );

  const addCurrency = React.useCallback(
    (currency: Currency) => {
      setState(currencies => currencies.concat(currency));
      setSelectedCurrencyId(currency.id);
    },
    [setState],
  );
  const removeCurrency = React.useCallback(
    (currencyId: number) =>
      setState(currencies => currencies.filter(({ id }) => id !== currencyId)),
    [setState],
  );

  const selectedCurrency =
    currencies.find(({ id }) => id === selectedCurrencyId) || initCurrency;

  React.useEffect(() => setAsLastUsed(selectedCurrencyId), [
    selectedCurrencyId,
  ]);

  React.useEffect(() => store(currencies), [currencies]);

  return (
    <CurrenciesContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrencyId,
        currencies,
        addCurrency,
        removeCurrency,
      }}
    >
      {children}
    </CurrenciesContext.Provider>
  );
};
