import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

import { festivals } from '../festivals';

export const FestivalsStateContext = createContext(festivals);

export function useFestivals() {
  return useContext(FestivalsStateContext);
}
