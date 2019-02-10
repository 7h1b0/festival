import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { colorPrimary } from 'modules/theme';

function generateRange(steps) {
  return Array.from({ length: steps * 2 - 1 }, (_, i) => i);
}

function isLowerThanCurrentStep(step, currentStep) {
  return step <= currentStep * 2;
}

const Stepper = ({ steps, currentStep }) => {
  const range = generateRange(steps);
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        width: 60%;
        margin: 0 auto;
      `}
    >
      {range.map((_, step) => {
        const background = isLowerThanCurrentStep(step, currentStep)
          ? colorPrimary
          : '#dbe3f4';
        if (step % 2 === 0) {
          return (
            <div
              key={step}
              css={css`
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: ${background};
              `}
            />
          );
        }
        return (
          <div
            key={step}
            css={css`
              flex: 1;
              color: black;
              height: 1px;
              background: ${background};
            `}
          />
        );
      })}
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Stepper;
