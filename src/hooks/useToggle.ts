import { useState, useCallback } from 'react';

function useToggle(): [boolean, () => void] {
  const [value, setState] = useState(false);
  const toggle = useCallback(() => setState(state => !state), []);

  return [value, toggle];
}

export default useToggle;
