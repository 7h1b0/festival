/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';

import { FestivalsProvider } from 'context/festivals-context';
import { FestivalProvider } from 'context/festival-context';

import Converter from 'components/converter';
import Festivals from 'components/festivals';
import Header from 'components/header';

const App = () => {
  const [isOpen, openDrawer] = useState(false);

  return (
    <FestivalsProvider>
      <FestivalProvider>
        {isOpen && <Festivals closeDrawer={() => openDrawer(false)} />}
        <div class="flex flex-col lg:justify-center lg:h-full lg:max-w-lg mx-auto">
          <Header openDrawer={() => openDrawer(true)} />
          <Converter />
        </div>
      </FestivalProvider>
    </FestivalsProvider>
  );
};

export default App;
