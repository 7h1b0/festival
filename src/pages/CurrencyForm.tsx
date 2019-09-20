import React from 'react';
import { css } from '@emotion/core';
import { navigate, RouteComponentProps } from '@reach/router';

import CloseIcon from 'components/icons/CloseIcon';
import Change from 'components/steps/Change';
import Stepper from 'components/stepper';
import Button from 'src/components/button';
import Divider from 'components/divider';
import CurrencyName from 'components/steps/CurrencyName';
import FestivalName from 'components/steps/FestivalName';
import { useCurrenciesDispatch } from 'context/currenciesContext';
import { spaceH, spaceL, colorTitle, sizeLabel, spaceM } from 'modules/theme';

function isLastStep(step: number, steps: unknown[]) {
  return step === steps.length - 1;
}

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

type State = {
  readonly festival: string;
  readonly name: string;
  readonly euro: number;
  readonly currency: number;
};

function stepReducer(state: number, action: 'increment' | 'decrement'): number {
  switch (action) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return Math.max(state - 1, 0);
    default:
      return state;
  }
}

const CurrencyForm: React.FC<RouteComponentProps> = () => {
  const [currentStep, setCurrenStep] = React.useReducer(stepReducer, 0);
  const dispatchCurrencies = useCurrenciesDispatch();
  const [state, dispatch] = React.useReducer(
    (state, action): State => ({ ...state, ...action }),
    {
      festival: '',
      name: '',
      euro: 1,
      currency: 1,
    },
  );
  const [isValidStep, setValidStep] = React.useState(false);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ [event.target.name]: event.target.value }),
    [dispatch],
  );

  function handleNext(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    event.preventDefault();
    if (isLastStep(currentStep, STEPS)) {
      const newCurrency = {
        festival: state.festival,
        name: state.name,
        rate: state.euro / state.currency,
        id: Date.now(),
      };
      dispatchCurrencies({ type: 'add', data: newCurrency });
      redirectToConvert();
      return;
    }
    setCurrenStep(INCREMENT);
  }

  const redirectToConvert = () => {
    navigate('/');
  };

  const STEPS = [
    <FestivalName
      value={state.festival}
      onChange={handleChange}
      isValid={setValidStep}
    />,
    <CurrencyName
      value={state.name}
      festival={state.festival}
      onChange={handleChange}
      isValid={setValidStep}
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
              cursor: pointer;
            `}
            onClick={redirectToConvert}
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
      <form
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
          <Button
            uiStyle="raised"
            onClick={handleNext}
            disabled={!isValidStep}
            type="submit"
          >
            {isLastStep(currentStep, STEPS) ? 'Add' : 'Continue'}
          </Button>
          {currentStep > 0 && (
            <Button uiStyle="flat" onClick={() => setCurrenStep(DECREMENT)}>
              Back
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default CurrencyForm;
