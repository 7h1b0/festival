import React from 'react';
import Input from 'components/input';
import useValidator from 'hooks/useValidator';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: (value: boolean) => void;
};

const FestivalName: React.FC<Props> = ({ value, onChange, isValid }) => {
  useValidator(value, /\w+/, isValid);

  return (
    <Input
      autofocus
      name="festival"
      label="Enter the name of your festival"
      placeholder="Example: Tomorrowland"
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default FestivalName;
