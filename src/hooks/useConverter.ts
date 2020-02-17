import { useEffect, useReducer } from 'preact/hooks';
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

type Converter = {
  value: number;
  euros: number;
};

const initialState = { euros: 0, value: 0 };
function reducer(rate: number) {
  return (state: Converter, action: Action): Converter => {
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

function useConverter(rate: number): [Converter, (action: Action) => void] {
  const [state, dispatch] = useReducer(reducer(rate), initialState);

  useEffect(() => {
    dispatch({ type: 'RESET' });
  }, [rate]);

  return [state, dispatch];
}

export default useConverter;
