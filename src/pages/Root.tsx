import React from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';

import Converter from 'components/converter';
import Currencies from 'components/currencies';
import BottomActions from 'components/bottom-actions';
import {
  useCurrencyState,
  useCurrenciesState,
  useCurrencyDispatch,
} from 'context/currenciesContext';

const Convert: React.FC<RouteComponentProps> = () => {
  const currencies = useCurrenciesState();
  const selectedCurrency = useCurrencyState();
  const dispatch = useCurrencyDispatch();

  if (selectedCurrency == null) {
    return <Redirect to="/start" />;
  }

  return (
    <>
      <Currencies
        selected={selectedCurrency.id}
        currencies={currencies}
        onChange={e => dispatch(Number(e.target.value))}
      />
      <Converter />
      <BottomActions />
    </>
  );
};

export default Convert;
