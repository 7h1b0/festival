import React from 'react';
import { css } from '@emotion/core';
import CloseIcon from 'components/CloseIcon';
import Change from 'components/steps/Change';
import Stepper from 'components/Stepper';
import Button from 'components/Button';
import Divider from 'components/Divider';
import CurrencyName from 'components/steps/CurrencyName';
import FestivalName from 'components/steps/FestivalName';
import getDb, { CURRENCIES_TABLE } from 'modules/database';
import { spaceH, spaceL, colorTitle, sizeLabel, spaceM } from 'modules/theme';

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
      euro: 0,
      currency: 0,
    },
  );

  const handleChange = React.useCallback(
    event => dispatch({ [event.target.name]: event.target.value }),
    [dispatch],
  );

  function handleNext(event) {
    event.preventDefault();
    if (isLastStep(currentStep, STEPS)) {
      const newCurrency = {
        festival: state.festival,
        name: state.name,
        rate: state.euro / state.currency,
      };
      getDb()
        .then(db => db(CURRENCIES_TABLE).add(newCurrency))
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
    <Change
      currencyLabel={state.name}
      onChange={handleChange}
      euro={state.euro}
      currency={state.currency}
    />,
  ];

  return (
    <>
      <div
        css={css`
          background: #fff;
          padding: ${spaceL};
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            margin-bottom: ${spaceM};
          `}
        >
          <CloseIcon
            css={css`
              width: 15px;
              fill: ${colorTitle};
            `}
            onClick={onClose}
          />
          <h1
            css={css`
              width: calc(100% - 30px);
              color: ${colorTitle};
              font-size: ${sizeLabel};
              font-weight: bold;
              text-align: center;
            `}
          >
            Add a currency
          </h1>
        </div>

        <Stepper steps={STEPS.length} currentStep={currentStep} />
      </div>
      <Divider />
      <div
        css={css`
          width: 90%;
          margin: ${spaceH} auto;
        `}
      >
        {STEPS[currentStep]}
        <div
          css={css`
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            margin: ${spaceL} 0;
          `}
        >
          <Button uiStyle="raised" onClick={handleNext}>
            {isLastStep(currentStep, STEPS) ? 'Add' : 'Continue'}
          </Button>
          {currentStep > 0 && (
            <Button uiStyle="flat" onClick={() => setCurrenStep(DECREMENT)}>
              Back
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default CurrencyForm;
