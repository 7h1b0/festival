import { useEffect, useRef } from 'preact/hooks';

function useFocus(deps: ReadonlyArray<number>) {
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputEl.current !== null) {
      inputEl.current.focus();
    }
  }, deps); // eslint-disable-line
  return inputEl;
}

export default useFocus;
