/** @jsx h */
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

import App from './App';

jest.mock('festivals.ts', () => ({
  festivals: [
    {
      id: 1,
      name: 'JS Festival',
      currency: 'Closure',
      year: 2019,
      rate: 3,
    },
    {
      id: 2,
      name: 'Test Festival',
      currency: 'TDD',
      year: 2020,
      rate: 5,
    },
  ],
}));

describe('App', () => {
  it('should display the first festival by default', () => {
    const { getByText } = render(<App />);

    expect(getByText('Closure')).toBeVisible();
    expect(getByText('1 Closure = 3 EUR')).toBeVisible();
  });

  it('should change festival', () => {
    const { getByText, getByLabelText } = render(<App />);

    fireEvent.click(getByLabelText('menu'));
    fireEvent.click(getByText('Test Festival 2020'));

    expect(getByText('TDD')).toBeVisible();
    expect(getByText('1 TDD = 5 EUR')).toBeVisible();
  });
});
