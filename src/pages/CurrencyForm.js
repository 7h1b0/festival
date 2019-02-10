import React from 'react';
import { css } from '@emotion/core';
import CloseIcon from 'components/CloseIcon';
import Change from 'components/steps/Change';
import CurrencyName from 'components/steps/CurrencyName';
import FestivalName from 'components/steps/FestivalName';
import getDb, { CURRENCIES_TABLE } from 'modules/database';
import {
  spaceM,
  spaceS,
  colorSecondary,
  spaceL,
  borderRadius,
} from 'modules/theme';

function isLastStep(step, steps) {
  return step === steps.length - 1;
}

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

function stepReducer(state, action) {
  switch (action) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return Math.max(state - 1, 0);
    default:
      return state;
  }
}

const CurrencyForm = ({ onClose }) => {
  const [currentStep, setCurrenStep] = React.useReducer(stepReducer, 0);
  const [state, dispatch] = React.useReducer(
    (state, action) => ({ ...state, ...action }),
    {
      festival: '',
      name: '',
      rate: 0,
    },
  );

  const handleChange = React.useCallback(
    event => dispatch({ [event.target.name]: event.target.value }),
    [dispatch],
  );

  function handleNext(event) {
    event.preventDefault();
    if (isLastStep(currentStep, STEPS)) {
      getDb()
        .then(db => db(CURRENCIES_TABLE).add(state))
        .then(() => onClose());
      return;
    }
    setCurrenStep(INCREMENT);
  }

  const STEPS = [
    <FestivalName value={state.festival} onChange={handleChange} />,
    <CurrencyName
      value={state.name}
      festival={state.festival}
      onChange={handleChange}
    />,
    <Change currency={state.name} />,
  ];

  const lastStep = isLastStep(currentStep, STEPS);
  return (
    <div
      css={css`
        width: 95%;
        margin: ${spaceL} auto;
        background: #fff;
        border-radius: ${borderRadius};
        padding: ${spaceL};
      `}
    >
      <CloseIcon
        css={css`
          width: 15px;
        `}
        onClick={onClose}
      />

      {STEPS[currentStep]}
      <div
        css={css`
          display: flex;
        `}
      >
        {currentStep > 0 && (
          <button
            css={css`
              text-align: center;
              color: #fff;
              display: block;
              margin: ${spaceM} auto;
              padding: ${spaceS} ${spaceL};
              background-color: ${colorSecondary};
              border-radius: ${borderRadius};
              border: none;
            `}
            onClick={() => setCurrenStep(DECREMENT)}
          >
            PREVIOUS
          </button>
        )}
        <button
          css={css`
            text-align: center;
            color: #fff;
            display: block;
            margin: ${spaceM} auto;
            padding: ${spaceS} ${spaceL};
            background-color: ${colorSecondary};
            border-radius: ${borderRadius};
            border: none;
          `}
          onClick={handleNext}
        >
          {isLastStep(currentStep, STEPS) ? 'ADD' : 'NEXT'}
        </button>
      </div>
    </div>
  );
};

export default CurrencyForm;
