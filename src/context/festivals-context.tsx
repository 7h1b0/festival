import React from 'react';
import festivals from '../festivals.json';

import { Festival } from 'src/modules/festival';

export const FestivalsStateContext = React.createContext<Festival[]>(
  festivals.festivals,
);

export const useFestivals = () => React.useContext(FestivalsStateContext);

export const FestivalsProvider: React.FC<{}> = ({ children }) => {
  return (
    <FestivalsStateContext.Provider value={festivals.festivals}>
      {children}
    </FestivalsStateContext.Provider>
  );
};
