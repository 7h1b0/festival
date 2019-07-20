import { Currency } from 'modules/currency';
import { store } from 'modules/database';

import { CurrencyDispatch, Action } from './currenciesContext';

function isDifferentFrom(newCurrency: Currency) {
  return (currency: Currency) =>
    currency.festival !== newCurrency.festival &&
    currency.name !== newCurrency.name;
}

export default function reducer(dispatchCurrencyId: CurrencyDispatch) {
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

      case 'remove':
        const newState = state.filter(({ id }) => id !== action.data.id);
        store(newState);
        const lastCurrency = newState[newState.length - 1];
        const lastId = lastCurrency ? lastCurrency.id : -1;
        dispatchCurrencyId(lastId);

        return newState;

      default:
        return state;
    }
  };
}
