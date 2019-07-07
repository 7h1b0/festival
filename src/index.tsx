import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CurrenciesProvider } from 'context/currenciesContext';

ReactDOM.render(
  <CurrenciesProvider>
    <App />
  </CurrenciesProvider>,
  document.getElementById('app'),
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
