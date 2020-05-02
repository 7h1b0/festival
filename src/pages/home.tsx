/** @jsx h */
import { h, Fragment } from 'preact';
import { RoutableProps, route } from 'preact-router';
import { useState, useEffect } from 'preact/hooks';

import Drawer from 'components/drawer';
import Header from 'components/header';
import Converter from 'components/converter';
import useFestival from 'hooks/useFestival';

interface Props extends RoutableProps {
  slug: string;
}

function Home({ slug }: Props) {
  const [isDrawerOpen, openDrawer] = useState(false);
  const festival = useFestival(slug);

  useEffect(() => {
    openDrawer(false);
  }, [slug]);

  if (!festival) {
    route('/404', true);
    return null;
  }

  return (
    <Fragment>
      <Drawer
        open={isDrawerOpen}
        onClose={() => openDrawer(false)}
        selectedFestivalSlug={festival.slug}
      />
      <div class="flex flex-col lg:justify-center lg:h-full lg:max-w-lg mx-auto">
        <Header openDrawer={() => openDrawer(true)} title={festival.name} />
        <Converter festival={festival} />
      </div>
    </Fragment>
  );
}

export default Home;
