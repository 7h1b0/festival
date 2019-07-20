import * as React from 'react';
import { round } from '../modules/formatter';

type Action =
  | {
      type: 'TO_EUROS';
      data: number;
    }
  | {
      type: 'TO_CURRENCY';
      data: number;
    }
  | {
      type: 'RESET';
    };

const initialState = { euros: 0, value: 0 };
function reducer(rate: number) {
  return (state: Currencies, action: Action): Currencies => {
    switch (action.type) {
      case 'TO_EUROS':
        return {
          value: action.data,
          euros: round(action.data * rate),
        };

      case 'TO_CURRENCY':
        return {
          euros: action.data,
          value: round(action.data / rate),
        };

      case 'RESET': {
        return initialState;
      }

      default:
        return state;
    }
  };
}

type Currencies = {
  value: number;
  euros: number;
};

function useConverter(rate: number): [Currencies, React.Dispatch<Action>] {
  const [state, dispatch] = React.useReducer(reducer(rate), initialState);

  React.useEffect(() => {
    dispatch({ type: 'RESET' });
  }, [rate]);

  return [state, dispatch];
}

export default useConverter;
