import { TYPE } from 'hooks/useCurrencies';
import { Currency } from 'modules/currency';

export type SetStateAction = {
  type: TYPE.SET;
  value: {
    currencies: Currency[];
    selected: Currency | null;
    loading: boolean;
  };
};

export default function(
  currencies: Currency[],
  selected: Currency | null,
  loading: boolean,
): SetStateAction {
  return { type: TYPE.SET, value: { currencies, selected, loading } };
}
