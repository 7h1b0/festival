import React from 'react';
import { css } from '@emotion/core';
import { colorPrimary, colorDisabled, spaceM } from 'modules/theme';

type Props = { steps: number; currentStep: number };

const Stepper: React.FC<Props> = ({ steps, currentStep }) => {
  return (
    <div
      css={css`
        position: relative;
        height: 8px;
        margin: ${spaceM} 0;
      `}
    >
      <div
        css={css`
          position: absolute;
          bottom: 0px;
          height: 2px;
          width: 100%;
          background: ${colorDisabled};
        `}
      />
      <div
        css={css`
          width: ${((currentStep + 1) / steps) * 100}%;
          position: absolute;
          bottom: 0px;
          height: 8px;
          background: ${colorPrimary};
          transition: width 0.8s ease-in-out;
        `}
      />
    </div>
  );
};

export default Stepper;
