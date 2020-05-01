/** @jsx h */
import { h } from 'preact';
import Router from 'preact-router';

import Home from 'pages/home';
import Form from 'pages/form';

function App() {
  return (
    <Router>
      <Home path="/:id?" />
      <Form path="/add" />
    </Router>
  );
}

export default App;
