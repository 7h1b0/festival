import { TYPE } from 'hooks/useCurrencies';

export default function(name) {
  return { type: TYPE.REMOVE, value: name };
}
