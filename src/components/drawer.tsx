/** @jsx h */
import { h, RenderableProps } from 'preact';
import { Link } from 'preact-router';
import { useFestivals } from 'context/festivals-context';

type Props = {
  open: boolean;
  onClose: () => void;
  selectedFestivalSlug?: string;
};

function Drawer({
  open,
  onClose,
  selectedFestivalSlug,
}: RenderableProps<Props>) {
  const festivals = useFestivals();

  if (open) {
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
        <div class="flex flex-col h-full lg:justify-center text-center bg-gray-800 py-8">
          {festivals.map(({ name, slug }) => {
            const isSelected = selectedFestivalSlug === slug;
            return (
              <Link
                key={slug}
                href={`/${slug}`}
                class={`cursor-pointer py-3 hover:text-white text-xl ${
                  isSelected ? 'text-white' : 'text-gray-500'
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    );
  }
  return null;
}

export default Drawer;
