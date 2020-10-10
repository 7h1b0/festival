/** @jsx h */
import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';

import Converter from './converter';

describe('Converter', () => {
  const festival = {
    slug: 'js-festival',
    name: 'JS festival 2019',
    currency: 'Closure',
    rate: 3,
  };

  it('should converter festival currency to euros and vice versa', () => {
    const payload = {
      target: { value: 3 },
    };
    render(<Converter festival={festival} />);

    fireEvent.input(screen.getByLabelText(/^Closure/), payload);
    expect(screen.getByDisplayValue('9')).toBeVisible();

    fireEvent.input(screen.getByLabelText(/^EUR/), payload);
    expect(screen.getByDisplayValue('1')).toBeVisible();
  });
});
