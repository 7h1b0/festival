/** @jsx h */
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

import Converter from './converter';
import Context from '__factory__/context';

describe('Converter', () => {
  const festival = {
    id: 1,
    name: 'JS festival 2019',
    currency: 'Closure',
    rate: 3,
  };

  it('should converter festival currency to euros and vice versa', () => {
    const payload = {
      target: { value: 3 },
    };
    const { getByDisplayValue, getByLabelText } = render(
      <Context festivals={[]}>
        <Converter festival={festival} />
      </Context>,
    );

    fireEvent.input(getByLabelText(/^Closure/), payload);
    expect(getByDisplayValue('9')).toBeVisible();

    fireEvent.input(getByLabelText(/^EUR/), payload);
    expect(getByDisplayValue('1')).toBeVisible();
  });
});
