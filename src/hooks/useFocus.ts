import { useEffect, useRef } from 'preact/hooks';

function useFocus(deps: ReadonlyArray<number>, activate = true) {
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputEl.current !== null && activate) {
      inputEl.current.focus();
    }
  }, deps); // eslint-disable-line
  return inputEl;
}

export default useFocus;
