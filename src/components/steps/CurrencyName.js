import React from 'react';
import Input from 'components/Input';

const CurrencyName = ({ festival, value, onChange }) => (
  <Input
    label={`Enter the device name used by ${festival}:`}
    name="name"
    placeholder="Example: Perl"
    value={value}
    onChange={onChange}
    required
  />
);

export default CurrencyName;
