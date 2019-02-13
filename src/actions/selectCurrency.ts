import { TYPE } from 'hooks/useCurrencies';

export type SelectCurrencyAction = {
  readonly type: TYPE.SELECT;
  value: number;
};

export default function(id: number): SelectCurrencyAction {
  return { type: TYPE.SELECT, value: id };
}
