import { useReducer, useEffect } from 'react';
import { getLastUsed, setAsLastUsed } from 'modules/preferences';
import getDb, { CURRENCIES_TABLE } from 'modules/database';

export const TYPE = {
  SET: 'set',
  SELECT: 'select',
  REMOVE: 'remove',
};

function reducer(state, action) {
  switch (action.type) {
    case TYPE.SET:
      return { ...state, ...action.value };
    case TYPE.SELECT:
      setAsLastUsed(action.value);
      return {
        ...state,
        selected: state.currencies.find(({ id }) => id === action.value),
      };
    case TYPE.REMOVE:
      removeCurrency(action.value);
      const updateCurrencies = state.currencies.filter(
        ({ name }) => name !== action.value,
      );
      return {
        currencies: updateCurrencies,
        selected: updateCurrencies[0],
      };
    default:
      return state;
  }
}

async function removeCurrency(name) {
  const db = await getDb();
  db(CURRENCIES_TABLE).remove(name);
}

async function fetchCurrencies(dispatch) {
  const defaultName = getLastUsed();

  const db = await getDb();
  const event = await db(CURRENCIES_TABLE).findAll();

  const currencies = event.target.result.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const defaultCurrency =
    currencies.find(({ name }) => {
      return name === defaultName;
    }) || currencies[0];

  dispatch({
    type: TYPE.SET,
    value: { currencies, loading: false, selected: defaultCurrency },
  });
}

function useCurrencies() {
  const [state, dispatch] = useReducer(reducer, {
    currencies: [],
    selected: null,
    loading: true,
  });

  useEffect(() => {
    fetchCurrencies(dispatch);
  }, []);

  return { state, dispatch };
}

export default useCurrencies;
