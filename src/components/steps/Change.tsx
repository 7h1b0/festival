import React from 'react';
import Input from 'components/input';
import { css } from '@emotion/core';

import { colorSubtitle, sizeText, spaceM } from 'modules/theme';

type Props = {
  euro: number;
  currency: number;
  currencyLabel: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Change: React.FC<Props> = ({
  euro,
  currency,
  onChange,
  currencyLabel,
}) => (
  <>
    <div
      css={css`
        display: flex;
      `}
    >
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
    </div>

    <p
      css={css`
        color: ${colorSubtitle};
        font-size: ${sizeText};
        text-align: center;
        margin-top: ${spaceM};
      `}
    >
      {`${euro} euros equals ${currency} ${currencyLabel}`}
    </p>
  </>
);

export default Change;
