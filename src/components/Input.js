import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import {
  borderRadius,
  colorDivider,
  colorPrimary,
  colorTitle,
  spaceS,
} from 'modules/theme';

const Input = ({
  name,
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder = '',
}) => (
  <label
    htmlFor={name}
    css={css`
      color: ${colorTitle};
    `}
  >
    {label}
    <input
      css={css`
        display: block;
        width: 100%;
        padding: ${spaceS};
        margin-top: 5px;
        border: 1px solid ${colorDivider};
        background-color: #fff;
        border-radius: ${borderRadius};
        &:focus {
          border: 1px solid ${colorPrimary};
          outline: none;
        }
      `}
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
    />
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Input;
