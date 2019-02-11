import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
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

const Button = ({ children, onClick, className, uiStyle }) => (
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

Button.propTypes = {
  uiStyle: PropTypes.oneOf(['flat', 'raised']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
