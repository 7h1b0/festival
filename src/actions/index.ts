export { default as removeCurrency } from './removeCurrency';
export { default as setState } from './setState';
export { default as selectCurrency } from './selectCurrency';

import { RemoveCurrencyAction } from './removeCurrency';
import { SelectCurrencyAction } from './selectCurrency';
import { SetStateAction } from './setState';

export type Action =
  | RemoveCurrencyAction
  | SelectCurrencyAction
  | SetStateAction;
