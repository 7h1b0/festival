/** @jsx h */
import { h } from 'preact';
import Router from 'preact-router';

import Home from 'pages/home';
import Redirect from 'pages/redirect';
import NotFound from 'pages/not-found';

function App() {
  return (
    <Router>
      <NotFound path="/404" />
      <Home path="/:slug" slug="" />
      <Redirect path="/" />
    </Router>
  );
}

export default App;
