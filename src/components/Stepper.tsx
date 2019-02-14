import React from 'react';
import { css } from '@emotion/core';
import { colorPrimary } from 'modules/theme';

function generateRange(steps: number) {
  return Array.from({ length: steps }, (_, i) => i);
}

type Props = { steps: number; currentStep: number };

const Stepper: React.FC<Props> = ({ steps, currentStep }) => {
  const range = generateRange(steps);
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        margin: 0 auto;
      `}
    >
      {range.map((_, step) => {
        const background = step === currentStep ? colorPrimary : '#dbe3f4';
        return (
          <div
            key={step}
            css={css`
              width: 10px;
              height: 10px;
              border-radius: 50%;
              margin: 0 4px;
              background: ${background};
            `}
          />
        );
      })}
    </div>
  );
};

export default Stepper;
