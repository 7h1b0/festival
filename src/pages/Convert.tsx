import React from 'react';
import Converter from 'components/Converter';
import Currencies from 'components/Currencies';
import BottomActions from 'components/BottomActions';
import GetStarted from 'components/GetStarted';
import {
  useCurrencyState,
  useCurrenciesState,
  useCurrencyDispatch,
} from 'context/currenciesContext';

type Props = { showForm: () => void };

const Convert: React.FC<Props> = ({ showForm }) => {
  const currencies = useCurrenciesState();
  const selectedCurrency = useCurrencyState();
  const dispatch = useCurrencyDispatch();

  if (selectedCurrency == null) {
    return <GetStarted showForm={showForm} />;
  }

  return (
    <>
      <Currencies
        selected={selectedCurrency.id}
        currencies={currencies}
        onChange={e => dispatch(Number(e.target.value))}
      />
      <Converter />
      <BottomActions onAdd={showForm} />
    </>
  );
};

export default Convert;
