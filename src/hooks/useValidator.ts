import * as React from 'react';

function useValidator(
  value: string,
  regex: RegExp,
  isValid: (value: boolean) => void,
) {
  React.useEffect(() => void isValid(regex.test(value)), [
    value,
    isValid,
    regex,
  ]);
}

export default useValidator;
