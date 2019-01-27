import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { formatRate } from 'modules/formatter';

const Rate = ({ rate, origin, target, amount = 1, className }) => (
  <p
    css={css`
      text-transform: uppercase;
      font-size: 0.8rem;
    `}
    className={className}
  >
    {formatRate(rate, origin, target, 1)}
  </p>
);

Rate.propTypes = {
  rate: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  amount: PropTypes.number,
  className: PropTypes.string,
};

export default Rate;
