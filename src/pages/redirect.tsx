import { RoutableProps, route } from 'preact-router';

import { getLastUsed } from 'modules/preferences';
import { useFestivals } from 'context/festivals-context';

function Redirect(_: RoutableProps) {
  const festivals = useFestivals();
  const lastSlug = getLastUsed() ?? festivals[0].slug;

  route(`/${lastSlug}`, true);

  return null;
}

export default Redirect;
