import React from 'react';
import Convert from 'pages/Convert';
import CurrencyForm from 'pages/CurrencyForm';
import useForm from 'hooks/useForm';

const App = () => {
  const { showForm, displayForm, hideForm } = useForm();

  if (showForm) {
    return <CurrencyForm onClose={hideForm} />;
  }

  return <Convert showForm={displayForm} />;
};

export default App;
