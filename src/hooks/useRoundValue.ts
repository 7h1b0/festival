import { useState } from 'react';
import { round } from '../modules/formatter';

type Value = number | null;
function useRoundValue(defaultValue: Value): [Value, (value: Value) => void] {
  const [value, setState] = useState(defaultValue);
  const useRoundValue = (value: Value) => setState(value ? round(value) : null);
  return [value, useRoundValue];
}

export default useRoundValue;