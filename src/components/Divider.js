import React from 'react';
import { css } from '@emotion/core';
import { colorDivider } from 'modules/theme';

const Divider = () => (
  <div
    css={css`
      background: ${colorDivider};
      height: 1px;
    `}
  />
);

export default Divider;
