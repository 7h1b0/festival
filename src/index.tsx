/** @jsx h */
import { h, render } from 'preact';
import App from './App';

const app = document.getElementById('app');
if (app !== null) {
  render(<App />, app);
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
