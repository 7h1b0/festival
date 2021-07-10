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

    userEvent.type(screen.getByRole('spinbutton', { name: /^Closure/ }), '3');
    expect(screen.getByRole('spinbutton', { name: /^EUR/ })).toHaveValue(9);

    userEvent.clear(screen.getByRole('spinbutton', { name: /^EUR/ }));

    userEvent.type(screen.getByRole('spinbutton', { name: /^EUR/ }), '3');
    expect(screen.getByRole('spinbutton', { name: /^Closure/ })).toHaveValue(1);
  });
});
