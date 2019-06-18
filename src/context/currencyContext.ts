import React from 'react';
import { Currency } from 'modules/currency';

const CurrencyContext = React.createContext<Currency>({
  id: -1,
  festival: '',
  name: '',
  rate: 0,
});

export default CurrencyContext;
