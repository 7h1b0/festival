/** @jsx h */
import { h, RenderableProps } from 'preact';
import { route } from 'preact-router';
import { useFestivals } from 'context/festivals-context';

type Props = {
  onClose: () => void;
  selectedFestivalId: number;
};

function Drawer({ onClose, selectedFestivalId }: RenderableProps<Props>) {
  const festivals = useFestivals();

  const handleClick = (path: string) => {
    route(`/${path}`);
    onClose();
  };

  return (
    <nav class="w-full bg-gray-800 fixed inset-0 p-8 ">
      <button onClick={onClose} aria-label="Close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="w-6 h-6 fill-current text-gray-500"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </button>
      <ul
        role="tablist"
        title="festivals"
        class="flex flex-col h-full lg:justify-center lg:text-center bg-gray-800 py-8"
      >
        {festivals.map(({ name, id, year }) => {
          const isSelected = selectedFestivalId === id;
          return (
            <li
              key={id}
              role="tab"
              tabIndex={0}
              onClick={() => handleClick(`${id}`)}
              aria-selected={isSelected}
              class={`cursor-pointer py-3 hover:text-white text-xl ${
                isSelected ? 'text-white' : 'text-gray-500'
              }`}
            >
              {`${name} ${year}`}
            </li>
          );
        })}
        <li
          role="tab"
          tabIndex={0}
          onClick={() => handleClick('add')}
          class="cursor-pointer py-3 hover:text-white text-xl text-gray-500"
        >
          Add a festival
        </li>
      </ul>
    </nav>
  );
}

export default Drawer;
