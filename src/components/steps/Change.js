import React from 'react';
import Input from 'components/Input';

const Change = ({ euro, currency, onChange, currencyLabel }) => (
  <>
    <Input
      name="euro"
      label="Euros"
      type="number"
      required
      value={euro}
      onChange={onChange}
      placeholder="Example: 10"
    />

    <Input
      name="currency"
      label={currencyLabel}
      type="number"
      required
      value={currency}
      placeholder="Example: 13"
      onChange={onChange}
    />
  </>
);

export default Change;
