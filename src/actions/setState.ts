import { TYPE } from 'hooks/useCurrencies';
import { Currency } from 'modules/currency';

export type SetStateAction = {
  type: TYPE.SET;
  value: {
    currencies: Currency[];
    selected: Currency | null;
  };
};

export default function(
  currencies: Currency[],
  selected: Currency | null,
): SetStateAction {
  return { type: TYPE.SET, value: { currencies, selected } };
}
