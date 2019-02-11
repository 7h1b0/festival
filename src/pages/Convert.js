import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Converter from 'components/Converter';
import Currencies from 'components/Currencies';
import Actions from 'components/Actions';
import Button from 'components/Button';
import useCurrencies from 'hooks/useCurrencies';
import selectCurrency from 'actions/selectCurrency';
import removeCurrency from 'actions/removeCurrency';
import { spaceL } from 'modules/theme';

const Convert = ({ showForm }) => {
  const { state, dispatch } = useCurrencies();
  if (state.loading) {
    return <p>Loading</p>;
  }

  const { currencies, selected } = state;

  if (currencies.length === 0) {
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
      <Actions onDelete={() => dispatch(removeCurrency(selected.name))} />
    </>
  );
};

Convert.propTypes = {
  showForm: PropTypes.func.isRequired,
};

export default Convert;
