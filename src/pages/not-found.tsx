/** @jsx h */
import { h } from 'preact';
import { RoutableProps, Link } from 'preact-router';

import { removeLastUsed } from 'modules/preferences';

function NotFound(_: RoutableProps) {
  removeLastUsed();

  return (
    <div class="text-center flex flex-col justify-center h-full">
      <h1 class="text-gray-800 font-bold text-lg py-4">Festival not found</h1>
      <Link href="/" class="text-blue-500">
        Return home
      </Link>
    </div>
  );
}

export default NotFound;
