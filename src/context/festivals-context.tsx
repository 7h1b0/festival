import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

import festivals from '../festivals.json';

import { Festival } from 'src/modules/festival';

export const FestivalsStateContext = createContext<Festival[]>(
  festivals.festivals,
);

export const useFestivals = () => useContext(FestivalsStateContext);
