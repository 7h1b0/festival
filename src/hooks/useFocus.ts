import { useEffect, useRef } from 'preact/hooks';

function useFocus() {
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputEl.current !== document.activeElement) {
      inputEl.current?.focus();
    }
  }, []);
  return inputEl;
}

export default useFocus;
