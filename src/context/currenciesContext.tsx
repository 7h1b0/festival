import React from 'react';
import { getAllCurrencies } from 'modules/database';
import { setAsLastUsed, getLastUsed } from 'modules/database';
import { Currency } from 'modules/currency';
import { fetchCurrencyFromURL } from 'modules/url';
import reducer from './currenciesReducer';

export type Action =
  | { type: 'add'; data: Currency }
  | { type: 'remove'; data: Currency };
export type CurrencyDispatch = (value: number) => void;
export type CurrenciesDispatch = (value: Action) => void;

const CurrenciesStateContext = React.createContext<Currency[]>([]);
const CurrencyStateContext = React.createContext<Currency | undefined>(
  undefined,
);

const CurrenciesDispatchContext = React.createContext<CurrenciesDispatch>(
  () => {},
);
const CurrencyDispatchContext = React.createContext<CurrencyDispatch>(() => {});

export const useCurrenciesState = () =>
  React.useContext(CurrenciesStateContext);
export const useCurrencyState = () => React.useContext(CurrencyStateContext);

export const useCurrenciesDispatch = () =>
  React.useContext(CurrenciesDispatchContext);
export const useCurrencyDispatch = () =>
  React.useContext(CurrencyDispatchContext);

export const CurrenciesProvider: React.FC<{}> = ({ children }) => {
  const [selectedCurrencyId, setSelectedCurrencyId] = React.useState(
    getLastUsed,
  );

  const handleSelectCurrency = (selectedCurrencyId: number) => {
    setAsLastUsed(selectedCurrencyId);
    setSelectedCurrencyId(selectedCurrencyId);
  };

  const [currencies, dispatch] = React.useReducer(
    reducer(handleSelectCurrency),
    undefined,
    () => getAllCurrencies(),
  );

  const selectedCurrency = currencies.find(
    ({ id }) => id === selectedCurrencyId,
  );

  React.useEffect(() => {
    const sharedCurrency = fetchCurrencyFromURL();
    if (sharedCurrency) {
      dispatch({ type: 'add', data: sharedCurrency });
    }
  }, []);

  return (
    <CurrencyStateContext.Provider value={selectedCurrency}>
      <CurrenciesStateContext.Provider value={currencies}>
        <CurrencyDispatchContext.Provider value={handleSelectCurrency}>
          <CurrenciesDispatchContext.Provider value={dispatch}>
            {children}
          </CurrenciesDispatchContext.Provider>
        </CurrencyDispatchContext.Provider>
      </CurrenciesStateContext.Provider>
    </CurrencyStateContext.Provider>
  );
};
