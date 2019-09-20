import React from 'react';
import { css } from '@emotion/core';
import { spaceL } from 'modules/theme';
import { Currency } from 'modules/currency';

type Props = {
  currencies: ReadonlyArray<Currency>;
  selected: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Currencies: React.FC<Props> = ({ currencies, selected, onChange }) => (
  <select
    title="currencies"
    value={selected}
    onChange={onChange}
    css={css`
      margin: ${spaceL} auto;
      background: none;
      border: none;
      display: block;
    `}
  >
    {currencies.map(({ festival, id }) => (
      <option key={id} value={id}>
        {festival}
      </option>
    ))}
  </select>
);

export default Currencies;
