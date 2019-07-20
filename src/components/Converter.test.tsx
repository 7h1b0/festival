import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Converter from './Converter';
import { CurrencyStateContext } from 'context/currenciesContext';
import { Currency } from 'modules/currency';

const fakeCurrency: Currency = {
  id: 1,
  name: 'Voucher',
  festival: 'Testival',
  rate: 2,
};

it('should display rate', () => {
  const { queryByText } = render(
    <CurrencyStateContext.Provider value={fakeCurrency}>
      <Converter />
    </CurrencyStateContext.Provider>,
  );

  expect(queryByText('1 Voucher = 2 EUR')).toBeTruthy();
  expect(queryByText('1 EUR = 0.5 Voucher')).toBeTruthy();
});

it('should convert Voucher to Euros and Euros to Voucher', () => {
  const { getByLabelText } = render(
    <CurrencyStateContext.Provider value={fakeCurrency}>
      <Converter />
    </CurrencyStateContext.Provider>,
  );

  const voucherInput = getByLabelText('Voucher');
  const eurosInput = getByLabelText('EUR');

  fireEvent.change(voucherInput, { target: { value: 10 } });
  expect(eurosInput).toHaveProperty('value', '20');

  fireEvent.change(eurosInput, { target: { value: 10 } });
  expect(voucherInput).toHaveProperty('value', '5');
});

it('should round value', () => {
  const fakeCurrency: Currency = {
    id: 1,
    name: 'Voucher',
    festival: 'Testival',
    rate: 1.3,
  };

  const { getByLabelText } = render(
    <CurrencyStateContext.Provider value={fakeCurrency}>
      <Converter />
    </CurrencyStateContext.Provider>,
  );

  fireEvent.change(getByLabelText('EUR'), { target: { value: 2 } });
  expect(getByLabelText('Voucher')).toHaveProperty('value', '1.54');
});
