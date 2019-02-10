import React from 'react';
import Input from 'components/Input';

const Change = ({ onChange, currencyLabel }) => {
  const [eur, setEuro] = React.useState(0);
  const [currency, setCurrency] = React.useState(0);

  React.useEffect(() => {
    const rate = eur / currency;
    if (!isNaN(rate)) {
      onChange(eur / currency);
    }
  }, [eur, currency]);
  return (
    <>
      <Input
        name="eur"
        label="Euros"
        type="number"
        required
        onChange={e => setEuro(e.target.value)}
        placeholder="Example: 10"
      />

      <Input
        name="currency"
        label={currencyLabel}
        type="number"
        required
        placeholder="Example: 13"
        onChange={e => setCurrency(e.target.value)}
      />
    </>
  );
};

export default Change;
