import React from 'react';
import Convert from 'pages/Convert';
import CurrencyForm from 'pages/CurrencyForm';
import useToggle from 'src/hooks/useToggle';

const App = () => {
  const [showForm, toggleForm] = useToggle();

  if (showForm) {
    return <CurrencyForm onClose={toggleForm} />;
  }

  return <Convert showForm={toggleForm} />;
};

export default App;
