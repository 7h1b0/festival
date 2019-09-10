import React from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';

import Converter from 'components/Converter';
import Currencies from 'components/Currencies';
import BottomActions from 'components/BottomActions';
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
