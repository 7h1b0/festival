import { useState } from 'react';
import { round } from '../modules/formatter';

function useRoundValue(defaultValue) {
  const [value, setState] = useState(defaultValue);
  const useRoundValue = value => setState(value ? round(value) : '');
  return [value, useRoundValue];
}

export default useRoundValue;
