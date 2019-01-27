import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Converter from 'components/Converter';
import Currencies from 'components/Currencies';
import Actions from 'components/Actions';
import useCurrencies from 'hooks/useCurrencies';
import { setAsDefault } from 'modules/preferences';
import selectCurrency from 'actions/selectCurrency';
import removeCurrency from 'actions/removeCurrency';
import { spaceL } from '../modules/theme';

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
    <div
      css={css`
        width: 95%;
        margin: 0 auto;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          padding: ${spaceL} 0;
        `}
      >
        <Currencies
          selected={selected.name}
          currencies={currencies}
          onChange={e => dispatch(selectCurrency(e.target.value))}
        />
        <button onClick={showForm}>Add Currency</button>
      </div>
      <Converter currency={selected} />
      <Actions
        onDelete={() => dispatch(removeCurrency(selected.name))}
        onDefault={setAsDefault(selected.name)}
      />
    </div>
  );
};

Convert.propTypes = {
  showForm: PropTypes.func.isRequired,
};

export default Convert;
