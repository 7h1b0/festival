/** @jsx h */
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

import App from './App';

jest.mock('festivals.ts', () => ({
  festivals: [
    {
      slug: 'js-festival-2019',
      name: 'JS Festival 2019',
      currency: 'Closure',
      rate: 3,
    },
    {
      slug: 'test-festival-2020',
      name: 'Test Festival 2020',
      currency: 'TDD',
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
