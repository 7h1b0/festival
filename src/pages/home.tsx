/** @jsx h */
import { h } from 'preact';
import Header from 'components/header';
import Converter from 'components/converter';

import { Festival } from 'festivals';

type Props = {
  festival: Festival;
};
function Home({ festival }: Props) {
  return (
    <div class="flex flex-col lg:justify-center lg:h-full lg:max-w-lg mx-auto">
      <Header title={festival.name} />
      <Converter festival={festival} />
    </div>
  );
}

export default Home;
