import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { spaceM, borderRadius, spaceL, colorDivider } from 'modules/theme';

const baseButton = css`
  background: transparent;
  border: none;
  text-transform: uppercase;
  display: block;
  padding: ${spaceM} ${spaceL};
`;

const Actions = ({ onDelete }) => (
  <div
    css={css`
      background: #fff;
      border-radius: ${borderRadius};
      margin: ${spaceL} 0;
    `}
  >
    <button css={baseButton} onClick={onDelete}>
      Remove
    </button>
  </div>
);

Actions.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default Actions;
