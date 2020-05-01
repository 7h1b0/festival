/** @jsx h */
import { h, RenderableProps } from 'preact';
import type { Festival } from 'src/festivals';

type Props = {
  openDrawer: () => void;
  festival: Festival;
};

function Header({ openDrawer, festival }: RenderableProps<Props>) {
  return (
    <header class="flex p-8 text-gray-800 font-bold">
      <button onClick={openDrawer} aria-label="menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="w-6 h-6"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <h1 class="ml-4">{`${festival?.name} ${festival?.year}`}</h1>
    </header>
  );
}

export default Header;
