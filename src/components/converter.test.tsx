/** @jsx h */
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

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
    const { getByDisplayValue, getByLabelText } = render(
      <Converter festival={festival} />,
    );

    fireEvent.input(getByLabelText(/^Closure/), payload);
    expect(getByDisplayValue('9')).toBeVisible();

    fireEvent.input(getByLabelText(/^EUR/), payload);
    expect(getByDisplayValue('1')).toBeVisible();
  });
});
