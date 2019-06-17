import React from 'react';
import { css } from '@emotion/core';
import Converter from 'components/Converter';
import Currencies from 'components/Currencies';
import Button from 'components/Button';
import GetStarted from 'components/GetStarted';
import useCurrencies from 'hooks/useCurrencies';
import { selectCurrency } from 'actions';
import { spaceL } from 'modules/theme';

type Props = { showForm: () => void };

const Convert: React.FC<Props> = ({ showForm }) => {
  const { state, dispatch } = useCurrencies();
  const { currencies, selected } = state;

  if (selected == null) {
    return <GetStarted showForm={showForm} />;
  }

  return (
    <>
      <Currencies
        selected={selected.id}
        currencies={currencies}
        onChange={e => dispatch(selectCurrency(Number(e.target.value)))}
      />
      <Converter currency={selected} />
      <Button
        uiStyle="flat"
        onClick={showForm}
        css={css`
          margin: ${spaceL} auto;
        `}
      >
        Add Currency
      </Button>
    </>
  );
};

export default Convert;
