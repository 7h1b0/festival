import * as React from 'react';
import { round } from '../modules/formatter';

type Value = number | null;
function useRoundValue(defaultValue: Value): [Value, (value: Value) => void] {
  const [value, setState] = React.useState(defaultValue);
  const setValue = React.useCallback(
    (value: Value) => setState(value ? round(value) : null),
    [],
  );
  return [value, setValue];
}

export default useRoundValue;
