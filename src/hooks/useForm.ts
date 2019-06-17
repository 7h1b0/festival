import { useState, useCallback } from 'react';

function useForm() {
  const [showForm, setVisibilityForm] = useState(false);
  const displayForm = useCallback(() => setVisibilityForm(true), []);
  const hideForm = useCallback(() => setVisibilityForm(false), []);

  return { showForm, displayForm, hideForm };
}

export default useForm;
