import React from 'react';
import { css } from '@emotion/core';
import { formatRate } from 'modules/formatter';

type Props = {
  rate: number;
  origin: string;
  target: string;
  amount?: number;
  className?: string;
};

const Rate: React.FC<Props> = ({
  rate,
  origin,
  target,
  amount = 1,
  className,
}) => (
  <p
    css={css`
      text-transform: uppercase;
      font-size: 0.8rem;
    `}
    className={className}
  >
    {formatRate(rate, origin, target, amount)}
  </p>
);

export default Rate;