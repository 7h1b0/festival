import { TYPE } from 'hooks/useCurrencies';

export type RemoveCurrencyAction = {
  readonly type: TYPE.REMOVE;
  value: number;
};

export default function(id: number): RemoveCurrencyAction {
  return { type: TYPE.REMOVE, value: id };
}
