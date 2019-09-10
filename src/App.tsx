import React from 'react';
import { Router } from '@reach/router';

import Convert from 'pages/Convert';
import CurrencyForm from 'pages/CurrencyForm';
import GetStarted from 'pages/GetStarted';

const App = () => {
  return (
    <Router>
      <CurrencyForm path="/add" />
      <Convert path="/" />
      <GetStarted path="/start" />
    </Router>
  );
};

export default App;
