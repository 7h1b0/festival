import React from 'react';
import { css } from '@emotion/core';
import { spaceM, spaceL } from 'modules/theme';

const baseButton = css`
  background: transparent;
  border: none;
  text-transform: uppercase;
  display: block;
  padding: ${spaceM} ${spaceL};
`;

type Props = {
  onDelete: (event: React.MouseEvent<HTMLElement>) => void;
};

const Actions: React.FC<Props> = ({ onDelete }) => (
  <div
    css={css`
      margin: ${spaceL} 0;
    `}
  >
    <button css={baseButton} onClick={onDelete}>
      Remove
    </button>
  </div>
);

export default Actions;
