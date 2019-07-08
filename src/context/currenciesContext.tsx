import React from 'react';
import { getAllCurrencies, store } from 'modules/database';
import { setAsLastUsed, getLastUsed } from 'modules/database';
import { Currency } from 'modules/currency';

type Action = { type: 'add'; data: Currency };
type CurrencyDispatch = (value: number) => void;
type CurrenciesDispatch = (value: Action) => void;

function isDifferentFrom(newCurrency: Currency) {
  return (currency: Currency) =>
    currency.festival !== newCurrency.festival &&
    currency.name !== newCurrency.name;
}

function reducer(dispatchCurrencyId: CurrencyDispatch) {
  return (state: Currency[], action: Action) => {
    switch (action.type) {
      case 'add':
        const isNew = state.every(isDifferentFrom(action.data));
        if (isNew) {
          const newState = state.concat(action.data);
          store(newState);
          dispatchCurrencyId(action.data.id);
          return newState;
        }
        return state;

      default:
        return state;
    }
  };
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
  const [selectedCurrencyId, setSelectedCurrencyId] = React.useState(
    getLastUsed,
  );

  const setSelectedCurrencyIdWithStorage = (selectedCurrencyId: number) => {
    setAsLastUsed(selectedCurrencyId);
    setSelectedCurrencyId(selectedCurrencyId);
  };

  const [currencies, dispatch] = React.useReducer(
    reducer(setSelectedCurrencyIdWithStorage),
    undefined,
    () => getAllCurrencies(),
  );

  const selectedCurrency = currencies.find(
    ({ id }) => id === selectedCurrencyId,
  );

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('rate') && params.has('festival') && params.has('name')) {
      const sharedCurrency = {
        rate: Number(params.get('rate')) || 1,
        festival: params.get('festival') || '',
        name: params.get('name') || '',
        id: Date.now(),
      };
      dispatch({ type: 'add', data: sharedCurrency });
    }
  }, []);

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
