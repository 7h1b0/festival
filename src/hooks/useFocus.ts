import { useRef, useEffect } from 'react';

function useFocus(deps: ReadonlyArray<any>) {
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputEl.current !== null) {
      inputEl.current.focus();
    }
  }, deps); // eslint-disable-line
  return inputEl;
}

export default useFocus;
