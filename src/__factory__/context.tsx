/** @jsx h */
import { h, FunctionComponent } from 'preact';
import type { Festival } from 'festivals';

import { FestivalsStateContext } from 'context/festivals-context';

type Props = {
  festivals: Festival[];
};

const Context: FunctionComponent<Props> = ({ festivals, children }) => {
  return (
    <FestivalsStateContext.Provider value={festivals}>
      {children}
    </FestivalsStateContext.Provider>
  );
};

export default Context;
