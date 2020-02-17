/** @jsx h */
import { h, FunctionComponent } from 'preact';
import { useFestivalState } from 'context/festival-context';

type Props = {
  openDrawer: () => void;
};

const Header: FunctionComponent<Props> = ({ openDrawer }) => {
  const festival = useFestivalState();
  return (
    <header class="flex lg:hidden p-8 text-gray-800 font-bold">
      <button onClick={openDrawer}>
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
};

export default Header;
