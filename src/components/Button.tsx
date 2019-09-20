import React from 'react';
import { css } from '@emotion/core';
import {
  spaceS,
  colorPrimary,
  borderRadius,
  sizeLabel,
  colorDisabled,
  colorTextDisabled,
} from 'modules/theme';

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
  min-height: 45px;
  padding: ${spaceS} 0;
  border-radius: ${borderRadius};
  text-transform: capitalize;
  font-size: ${sizeLabel};
  &:focus {
    outline: none;
  }
`;

const disabledStyle = css`
  background-color: ${colorDisabled};
  color: ${colorTextDisabled};
`;

type Props = {
  uiStyle: 'flat' | 'raised';
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  uiStyle,
  disabled = false,
  type = 'button',
}) => (
  <button
    css={css`
      ${base};
      ${style[uiStyle]}
      ${disabled && disabledStyle}
    `}
    onClick={onClick}
    className={className}
    disabled={disabled}
    type={type}
  >
    {children}
  </button>
);

export default Button;
