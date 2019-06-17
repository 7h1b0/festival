import * as React from 'react';
import { getLastUsed, setAsLastUsed } from 'modules/preferences';
import { getAllCurrencies } from 'modules/database';
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
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case TYPE.SET:
      return { ...state, ...action.value };
    case TYPE.SELECT:
      setAsLastUsed(action.value);
      return {
        ...state,
        selected:
          state.currencies.find(({ id }) => id === action.value) || null,
      };
    default:
      return state;
  }
}

async function fetchCurrencies(dispatch: Function) {
  const defaultName = getLastUsed();
  const currencies = getAllCurrencies();

  const defaultCurrency =
    currencies.find(({ id }) => {
      return id === defaultName;
    }) || currencies[0];

  dispatch(setState(currencies, defaultCurrency));
}

function useCurrencies(): { state: State; dispatch: React.Dispatch<Action> } {
  const [state, dispatch] = React.useReducer(reducer, {
    currencies: [],
    selected: null,
  });

  React.useEffect(() => {
    fetchCurrencies(dispatch);
  }, []);

  return { state, dispatch };
}

export default useCurrencies;
