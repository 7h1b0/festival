import React from 'react';
import { useFestivalState } from 'context/festival-context';

type Props = {
  openDrawer: () => void;
};

const Header: React.FC<Props> = ({ openDrawer }) => {
  const festival = useFestivalState();
  return (
    <header className="flex lg:hidden p-8 text-gray-800 font-bold">
      <button onClick={openDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-6 h-6"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <h1 className="ml-4">{`${festival?.name} ${festival?.year}`}</h1>
    </header>
  );
};

export default Header;
