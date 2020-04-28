/** @jsx h */
import { h, FunctionComponent } from 'preact';
import type { Festival } from 'festivals';

import {
  FestivalStateContext,
  FestivalDispatchContext,
} from 'context/festival-context';
import { FestivalsStateContext } from 'context/festivals-context';

type Props = {
  festivals: Festival[];
  festival: Festival;
  dispatch: (id: number) => void;
};

const Context: FunctionComponent<Props> = ({
  festivals,
  festival,
  dispatch,
  children,
}) => {
  return (
    <FestivalsStateContext.Provider value={festivals}>
      <FestivalStateContext.Provider value={festival}>
        <FestivalDispatchContext.Provider value={dispatch}>
          {children}
        </FestivalDispatchContext.Provider>
      </FestivalStateContext.Provider>
    </FestivalsStateContext.Provider>
  );
};

export default Context;
