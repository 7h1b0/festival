import { useRef, useEffect } from 'react';

function useFocus(deps) {
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current !== null) {
      inputEl.current.focus();
    }
  }, deps);
  return inputEl;
}

export default useFocus;
