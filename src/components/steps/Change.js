import React from 'react';
import { css } from '@emotion/core';
import Input from 'components/Input';

const Change = ({ value, onChange, currency }) => (
  <div
    css={css`
      display: flex;
      justify-content: space-between;
    `}
  >
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
  </div>
);

export default Change;
