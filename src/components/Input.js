import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { spaceS, spaceM, borderRadius } from 'modules/theme';

const Input = ({
  name,
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder = '',
}) => (
  <fieldset
    css={css`
      border: none;
      margin-top: ${spaceM};
    `}
  >
    <label htmlFor={name}>
      {label}
      <input
        css={css`
          display: block;
          width: 100%;
          padding: ${spaceS} 0;
          margin-top: 2px;
          border: none;
          background-color: #d6d6d6;
          border-radius: ${borderRadius};
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
  </fieldset>
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
