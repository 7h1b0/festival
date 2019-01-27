import React from 'react';

const Currencies = ({ currencies, name, selected, onChange }) => (
  <select id={name} name={name} value={selected} onChange={onChange}>
    {currencies.map(({ name, festival }) => (
      <option key={name} value={name}>
        {`${name} - ${festival}`}
      </option>
    ))}
  </select>
);

export default Currencies;
