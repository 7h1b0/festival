/** @jsx h */
import { h, RenderableProps } from 'preact';

type Props = {
  title: string;
};

function Header({ title }: RenderableProps<Props>) {
  const canShare = !!navigator.share;

  function handleClick() {
    if (canShare) {
      navigator.share({
        text: title,
        url: window.location.toString(),
      });
    } else {
      navigator.clipboard.writeText(window.location.toString());
    }
  }
  return (
    <header class="flex justify-between p-8 ">
      <h1 class="font-bold text-lg text-slate-800 capitalize flex-grow-0 truncate">
        {title}
      </h1>
      <button
        onClick={handleClick}
        class="w-6 text-slate-600 flex-shrink-0"
        aria-label="Share"
      >
        {canShare ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
        )}
      </button>
    </header>
  );
}

export default Header;
