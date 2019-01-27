import { useState } from 'react';
import { round } from '../modules/formatter';

export default function useRoundValue(defaultValue) {
  const [value, setState] = useState(defaultValue);
  const useRoundValue = value => setState(value ? round(value) : '');
  return [value, useRoundValue];
}
