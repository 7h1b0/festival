import React from 'react';
import { css } from '@emotion/core';
import { spaceS, colorPrimary, borderRadius, sizeLabel } from 'modules/theme';

const style = {
  flat: css`
    color: ${colorPrimary};
    background-color: transparent;
    border: 1px solid ${colorPrimary};
  `,
  raised: css`
    color: #fff;
    background-color: ${colorPrimary};
    border: none;
  `,
};

const base = css`
  text-align: center;
  display: block;
  min-width: 120px;
  padding: ${spaceS} 0;
  border-radius: ${borderRadius};
  text-transform: capitalize;
  font-size: ${sizeLabel};
  &:focus {
    outline: none;
  }
`;

type Props = {
  uiStyle: 'flat' | 'raised';
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
};

const Button: React.FC<Props> = ({ children, onClick, className, uiStyle }) => (
  <button
    css={css`
      ${base};
      ${style[uiStyle]}
    `}
    onClick={onClick}
    className={className}
  >
    {children}
  </button>
);

export default Button;
