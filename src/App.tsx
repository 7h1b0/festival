/** @jsx h */
import { h } from 'preact';

import Home from 'pages/home';
import Form from 'pages/form';

import getFestivalFromSearchLocation from 'modules/festival';

function App() {
  try {
    const festival = getFestivalFromSearchLocation(window.location.search);
    return <Home festival={festival} />;
  } catch (err) {
    return <Form />;
  }
}

export default App;
