/** @jsx h */
import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import Converter from './converter';

describe('Converter', () => {
  const festival = {
    slug: 'js-festival',
    name: 'JS festival 2019',
    currency: 'Closure',
    rate: 3,
  };

  it('should converter festival currency to euros and vice versa', () => {
    render(<Converter festival={festival} />);

    userEvent.type(screen.getByLabelText(/^Closure/), '3');
    expect(screen.getByDisplayValue('9')).toBeVisible();

    userEvent.clear(screen.getByLabelText(/^EUR/));
    userEvent.type(screen.getByLabelText(/^EUR/), '3');
    expect(screen.getByDisplayValue('1')).toBeVisible();
  });
});
