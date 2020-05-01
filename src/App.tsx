/** @jsx h */
import { h } from 'preact';
import Router from 'preact-router';

import Home from 'pages/home';
import Redirect from './pages/redirect';

function App() {
  return (
    <Router>
      <Home path="/:slug" slug="" />
      <Redirect path="/" />
    </Router>
  );
}

export default App;
