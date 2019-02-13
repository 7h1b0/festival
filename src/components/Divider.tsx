import React from 'react';
import { css } from '@emotion/core';
import { colorDivider } from 'modules/theme';

const Divider: React.FC<{}> = () => (
  <div
    css={css`
      background: ${colorDivider};
      height: 1px;
    `}
  />
);

export default Divider;
