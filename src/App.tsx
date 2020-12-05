/** @jsx h */
import { h } from 'preact';

import Home from 'pages/home';
import Form from 'pages/form';

import getFestivalFromSearchLocation from 'modules/festival';

function App() {
  const festival = getFestivalFromSearchLocation(window.location.search);
  if (festival !== null) {
    return <Home festival={festival} />;
  }
  return <Form />;
}

export default App;
