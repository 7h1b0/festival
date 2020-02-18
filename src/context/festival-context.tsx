/** @jsx h */
import { h, createContext, FunctionComponent } from 'preact';
import { useState, useContext } from 'preact/hooks';

import { setAsLastUsed, getLastUsed } from 'modules/database';
import { Festival } from 'src/modules/festival';
import { useFestivals } from './festivals-context';

export type CurrencyDispatch = (value: number) => void;

export const FestivalStateContext = createContext<Festival | null>(null);
export const FestivalDispatchContext = createContext<CurrencyDispatch>(
  () => {},
);

export const useFestivalState = () => {
  const festival = useContext(FestivalStateContext);

  if (festival === null) {
    throw new Error('useFestivalState must be within FestivalProvider');
  }
  return festival;
};

export const useFestivalDispatch = () => useContext(FestivalDispatchContext);

const findById = (festivals: Festival[], festivalId: number) =>
  festivals.find(({ id }) => id === festivalId);

export const FestivalProvider: FunctionComponent<{}> = ({ children }) => {
  const festivals = useFestivals();
  const [festival, setFestival] = useState(
    () => findById(festivals, getLastUsed()) ?? festivals[0],
  );

  const handleSelectFestival = (festivalId: number) => {
    const newSelectedFestival = findById(festivals, festivalId);

    if (newSelectedFestival) {
      setAsLastUsed(festivalId);
      setFestival(newSelectedFestival);
    }
  };

  return (
    <FestivalStateContext.Provider value={festival}>
      <FestivalDispatchContext.Provider value={handleSelectFestival}>
        {children}
      </FestivalDispatchContext.Provider>
    </FestivalStateContext.Provider>
  );
};
