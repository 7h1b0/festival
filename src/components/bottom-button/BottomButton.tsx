import React from 'react';
import { colorSubtitle } from 'modules/theme';
import { css } from '@emotion/core';

type Props = { icon: React.ReactNode; onClick: () => void; label: string };
const BottomButton: React.FC<Props> = ({ icon, onClick, label }) => {
  return (
    <div
      css={css`
        flex: 1;
        text-align: center;
      `}
    >
      <button
        onClick={onClick}
        type="button"
        css={css`
          min-width: 50px;
          display: inline-block;
          cursor: pointer;
          background: none;
          border: none;
        `}
      >
        {icon}
        <p
          css={css`
            text-transform: uppercase;
            font-size: 0.8rem;
            color: ${colorSubtitle};
          `}
        >
          {label}
        </p>
      </button>
    </div>
  );
};

export default BottomButton;
