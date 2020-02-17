/** @jsx h */
import { h, createContext, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import festivals from '../festivals.json';

import { Festival } from 'src/modules/festival';

export const FestivalsStateContext = createContext<Festival[]>(
  festivals.festivals,
);

export const useFestivals = () => useContext(FestivalsStateContext);

export const FestivalsProvider: FunctionComponent<{}> = ({ children }) => {
  return (
    <FestivalsStateContext.Provider value={festivals.festivals}>
      {children}
    </FestivalsStateContext.Provider>
  );
};
