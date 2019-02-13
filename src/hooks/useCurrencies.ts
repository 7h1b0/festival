import * as React from 'react';
import { getLastUsed, setAsLastUsed } from 'modules/preferences';
import getDb from 'modules/database';
import { Currency } from 'modules/currency';
import { setState, Action } from 'actions/';

export enum TYPE {
  SET = 'set',
  SELECT = 'select',
  REMOVE = 'remove',
}

type State = {
  readonly currencies: ReadonlyArray<Currency>;
  readonly selected: Currency | null;
  readonly loading: boolean;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case TYPE.SET:
      return { ...state, ...action.value };
    case TYPE.SELECT:
      setAsLastUsed(`${action.value}`);
      return {
        ...state,
        selected:
          state.currencies.find(({ id }) => id === action.value) || null,
      };
    case TYPE.REMOVE:
      removeCurrency(action.value);
      const updateCurrencies = state.currencies.filter(
        ({ id }) => id !== action.value,
      );
      return {
        ...state,
        currencies: updateCurrencies,
        selected: updateCurrencies[0],
      };
    default:
      return state;
  }
}

async function removeCurrency(name: number) {
  const db = await getDb();
  db.remove(name);
}

async function fetchCurrencies(dispatch: Function) {
  const defaultName = getLastUsed();

  const db = await getDb();
  const currencies = await db.findAll();

  const defaultCurrency =
    currencies.find(({ name }) => {
      return name === defaultName;
    }) || currencies[0];

  dispatch(setState(currencies, defaultCurrency, false));
}

function useCurrencies(): { state: State; dispatch: React.Dispatch<Action> } {
  const [state, dispatch] = React.useReducer(reducer, {
    loading: true,
    currencies: [],
    selected: null,
  });

  React.useEffect(() => {
    fetchCurrencies(dispatch);
  }, []);

  return { state, dispatch };
}

export default useCurrencies;
