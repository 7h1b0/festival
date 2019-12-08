import React from 'react';
import { Router } from '@reach/router';

import Root from 'pages/Root';
import Add from 'pages/Add';
import Start from 'pages/Start';

const App = () => {
  return (
    <Router>
      <Add path="/add" />
      <Root path="/" />
      <Start path="/start" />
    </Router>
  );
};

export default App;
