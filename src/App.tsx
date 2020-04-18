/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';

import { FestivalProvider } from 'context/festival-context';

import Converter from 'components/converter';
import Drawer from 'components/drawer';
import Header from 'components/header';

function App() {
  const [isDrawerOpen, openDrawer] = useState(false);

  return (
    <FestivalProvider>
      {isDrawerOpen && <Drawer onClose={() => openDrawer(false)} />}
      <div class="flex flex-col lg:justify-center lg:h-full lg:max-w-lg mx-auto">
        <Header openDrawer={() => openDrawer(true)} />
        <Converter />
      </div>
    </FestivalProvider>
  );
}

export default App;
