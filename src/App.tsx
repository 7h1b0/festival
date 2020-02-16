import React from 'react';

import { FestivalsProvider } from 'context/festivals-context';
import { FestivalProvider } from 'context/festival-context';

import Converter from 'components/converter';
import Festivals from 'components/festivals';
import Header from 'components/header';

const App = () => {
  const [isOpen, openDrawer] = React.useState(false);

  return (
    <FestivalsProvider>
      <FestivalProvider>
        <Festivals display={isOpen} closeDrawer={() => openDrawer(false)} />
        <div className="flex flex-col lg:justify-center lg:h-full lg:max-w-lg mx-auto">
          <Header openDrawer={() => openDrawer(true)} />
          <Converter />
        </div>
      </FestivalProvider>
    </FestivalsProvider>
  );
};

export default App;
