import React from 'react';
import Input from 'components/Input';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLElement>) => void;
};

const FestivalName: React.FC<Props> = ({ value, onChange }) => (
  <Input
    name="festival"
    label="Enter the name of your festival"
    placeholder="Example: Tomorrowland"
    value={value}
    onChange={onChange}
    required
  />
);

export default FestivalName;
