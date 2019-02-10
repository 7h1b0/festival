import React from 'react';
import { css } from '@emotion/core';
import { spaceL } from 'modules/theme';

const Currencies = ({ currencies, name, selected, onChange }) => (
  <select
    id={name}
    name={name}
    value={selected}
    onChange={onChange}
    css={css`
      margin: ${spaceL} auto;
      background: none;
      border: none;
      display: block;
    `}
  >
    {currencies.map(({ name, festival }) => (
      <option key={name} value={name}>
        {`${name} - ${festival}`}
      </option>
    ))}
  </select>
);

export default Currencies;
