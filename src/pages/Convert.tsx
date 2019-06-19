import React from 'react';
import { css } from '@emotion/core';
import Converter from 'components/Converter';
import Currencies from 'components/Currencies';
import BottomActions from 'components/BottomActions';
import GetStarted from 'components/GetStarted';
import useCurrencies from 'hooks/useCurrencies';
import { selectCurrency } from 'actions';

import CurrencyContext from 'context/currencyContext';

type Props = { showForm: () => void };

const Convert: React.FC<Props> = ({ showForm }) => {
  const { state, dispatch } = useCurrencies();
  const { currencies, selected } = state;

  if (selected == null) {
    return <GetStarted showForm={showForm} />;
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
      `}
    >
      <CurrencyContext.Provider value={selected}>
        <Currencies
          selected={selected.id}
          currencies={currencies}
          onChange={e => dispatch(selectCurrency(Number(e.target.value)))}
        />
        <Converter />
        <BottomActions onAdd={showForm} />
      </CurrencyContext.Provider>
    </div>
  );
};

export default Convert;
