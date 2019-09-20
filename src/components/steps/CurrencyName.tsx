import React from 'react';
import Input from 'components/Input';
import useValidator from 'hooks/useValidator';

type Props = {
  festival: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: (value: boolean) => void;
};

const CurrencyName: React.FC<Props> = ({
  festival,
  value,
  onChange,
  isValid,
}) => {
  useValidator(value, /\w+/, isValid);

  return (
    <Input
      autofocus
      label={`Enter the currency name used by ${festival}:`}
      name="name"
      placeholder="Example: Pearl"
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default CurrencyName;
