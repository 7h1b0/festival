import { RoutableProps, route } from 'preact-router';

import { getLastUsed } from 'modules/preferences';
import { festivals } from 'festivals';

function Redirect(_: RoutableProps) {
  const lastSlug = getLastUsed() ?? festivals[0].slug;

  route(`/${lastSlug}`, true);

  return null;
}

export default Redirect;
