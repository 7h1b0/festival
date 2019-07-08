import * as React from 'react';

function useToggle(initState = false): [boolean, () => void] {
  const [value, setState] = React.useState(initState);
  const toggle = React.useCallback(() => setState(state => !state), []);

  return [value, toggle];
}

export default useToggle;
