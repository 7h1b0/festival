import React from 'react';
import { setAsLastUsed, getLastUsed } from 'modules/database';
import { Festival } from 'src/modules/festival';
import { useFestivals } from './festivals-context';

export type CurrencyDispatch = (value: number) => void;

export const FestivalStateContext = React.createContext<Festival | null>(null);

export const FestivalDispatchContext = React.createContext<CurrencyDispatch>(
  () => {},
);

export const useFestivalState = () => React.useContext(FestivalStateContext);

export const useFestivalDispatch = () =>
  React.useContext(FestivalDispatchContext);

const findById = (festivals: Festival[], festivalId: number) =>
  festivals.find(({ id }) => id === festivalId);

export const FestivalProvider: React.FC<{}> = ({ children }) => {
  const festivals = useFestivals();
  const [festival, setFestival] = React.useState(
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
