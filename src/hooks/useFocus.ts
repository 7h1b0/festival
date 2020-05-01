import { useEffect, useRef } from 'preact/hooks';

function useFocus(deps: ReadonlyArray<string>) {
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => inputEl.current?.focus(), deps); // eslint-disable-line
  return inputEl;
}

export default useFocus;
