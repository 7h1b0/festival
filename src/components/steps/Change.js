import React from 'react';
import Input from 'components/Input';

const Change = ({ value, onChange, currency }) => (
  <>
    <Input
      name="eur"
      label="Euros"
      type="number"
      required
      placeholder="Example: 10"
    />

    <Input
      name="currency"
      label={currency}
      type="number"
      required
      placeholder="Example: 13"
    />
  </>
);

export default Change;
