import React from 'react';
import { getAllCurrencies, store } from 'modules/database';
import { setAsLastUsed, getLastUsed } from 'modules/database';
import { Currency } from 'modules/currency';

type Action = { type: 'add'; data: Currency };
type CurrencyDispatch = (value: number) => void;
type CurrenciesDispatch = (value: Action) => void;

function reducer(state: Currency[], action: Action) {
  switch (action.type) {
    case 'add':
      const newState = state.concat(action.data);
      store(newState);
      return newState;

    default:
      return state;
  }
}

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

export const CurrenciesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currencies, dispatch] = React.useReducer(reducer, undefined, () =>
    getAllCurrencies(),
  );
  const [selectedCurrencyId, setSelectedCurrencyId] = React.useState(
    getLastUsed,
  );

  const selectedCurrency = currencies.find(
    ({ id }) => id === selectedCurrencyId,
  );

  const setSelectedCurrencyIdWithStorage = (selectedCurrencyId: number) => {
    setAsLastUsed(selectedCurrencyId);
    setSelectedCurrencyId(selectedCurrencyId);
  };

  return (
    <CurrencyStateContext.Provider value={selectedCurrency}>
      <CurrenciesStateContext.Provider value={currencies}>
        <CurrencyDispatchContext.Provider
          value={setSelectedCurrencyIdWithStorage}
        >
          <CurrenciesDispatchContext.Provider value={dispatch}>
            {children}
          </CurrenciesDispatchContext.Provider>
        </CurrencyDispatchContext.Provider>
      </CurrenciesStateContext.Provider>
    </CurrencyStateContext.Provider>
  );
};
