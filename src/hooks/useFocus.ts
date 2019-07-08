import * as React from 'react';

function useFocus(deps: ReadonlyArray<any>) {
  const inputEl = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (inputEl.current !== null) {
      inputEl.current.focus();
    }
  }, deps); // eslint-disable-line
  return inputEl;
}

export default useFocus;
