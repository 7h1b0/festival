import React from 'react';
import { css } from '@emotion/core';
import Converter from 'components/Converter';
import Currencies from 'components/Currencies';
import Actions from 'components/Actions';
import Button from 'components/Button';
import useCurrencies from 'hooks/useCurrencies';
import { selectCurrency, removeCurrency } from 'actions';
import { spaceL } from 'modules/theme';

type Props = { showForm: () => void };

const Convert: React.FC<Props> = ({ showForm }) => {
  const { state, dispatch } = useCurrencies();
  if (state.loading) {
    return <p>Loading</p>;
  }

  const { currencies, selected } = state;

  if (selected == null) {
    showForm();
    return null;
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
      <Actions onDelete={() => dispatch(removeCurrency(selected.id))} />
    </>
  );
};

export default Convert;