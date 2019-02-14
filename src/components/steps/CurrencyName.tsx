import React from 'react';
import Input from 'components/Input';

type Props = {
  festival: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLElement>) => void;
};

const CurrencyName: React.FC<Props> = ({ festival, value, onChange }) => (
  <Input
    label={`Enter the currency name used by ${festival}:`}
    name="name"
    placeholder="Example: Perl"
    value={value}
    onChange={onChange}
    required
  />
);

export default CurrencyName;
