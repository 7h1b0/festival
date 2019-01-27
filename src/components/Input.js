import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { spaceS, spaceM, borderRadius } from 'modules/theme';

const Input = ({ name, value, onChange, type = 'text', required = false }) => (
  <fieldset
    css={css`
      border: none;
      margin-top: ${spaceM};
    `}
  >
    <label htmlFor={name}>
      {name}
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
      />
    </label>
  </fieldset>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default Input;
