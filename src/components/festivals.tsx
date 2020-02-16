import React from 'react';
import { useFestivals } from 'context/festivals-context';
import {
  useFestivalState,
  useFestivalDispatch,
} from 'context/festival-context';

type Props = {
  display?: boolean;
  closeDrawer: () => void;
};

const Festivals: React.FC<Props> = ({ display, closeDrawer }) => {
  const festival = useFestivalState();
  const dispatch = useFestivalDispatch();
  const festivals = useFestivals();

  const visibility = display ? 'block ' : 'hidden';

  const handleClick = (id: number) => {
    dispatch(id);
    closeDrawer();
  };

  return (
    <nav
      className={`${visibility} w-full bg-gray-800 lg:block lg:bg-transparent h-full fixed top-0 left-0 p-8`}
    >
      <button onClick={closeDrawer} className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-6 h-6 fill-current text-gray-500"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </button>
      <ul
        title="festivals"
        className="block h-full lg:w-64 bg-gray-800 lg:rounded-lg py-8 lg:shadow lg:px-4"
      >
        {festivals.map(({ name, id, year }) => (
          <li
            key={id}
            onClick={() => handleClick(id)}
            className={`cursor-pointer py-3 hover:text-white ${
              festival?.id === id ? 'text-white' : 'text-gray-500'
            }`}
          >
            {`${name} ${year}`}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Festivals;
