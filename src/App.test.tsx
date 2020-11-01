/** @jsx h */
import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import '@testing-library/jest-dom'; // fix TS issues

import App from './App';

describe('App', () => {
  it('should display the festival containing in URL', () => {
    window.history.replaceState(
      {},
      'Test',
      '/?name=Javascript&rate=3&currency=Closure',
    );
    render(<App />);

    expect(screen.getByText('Javascript')).toBeVisible();
    expect(screen.getByText('1 Closure = 3 EUR')).toBeVisible();
  });

  it('should redirect to a form is festival is invalid', () => {
    window.history.replaceState(
      {},
      'Test',
      '/?name=___&rate=3&currency=Closure',
    );
    render(<App />);

    expect(screen.getByText('Submit')).toBeVisible();
  });
});
