import React, { useState } from 'react';
import Convert from 'pages/Convert';
import CurrencyForm from 'pages/CurrencyForm';

const App = () => {
  const [showForm, setVisibilityForm] = useState(false);

  if (showForm) {
    return <CurrencyForm onClose={() => setVisibilityForm(false)} />;
  }

  return <Convert showForm={() => setVisibilityForm(true)} />;
};

export default App;
