/** @jsx h */
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

import Converter from './converter';
import Context from '__factory__/context';

describe('Converter', () => {
  const festival = {
    id: 1,
    name: 'JS festival',
    currency: 'Closure',
    year: 2019,
    rate: 3,
  };

  it('should converter festival currency to euros and vice versa', () => {
    const payload = {
      target: { value: 3 },
    };
    const { getByDisplayValue, getByLabelText } = render(
      <Context festivals={[]} festival={festival} dispatch={jest.fn()}>
        <Converter />
      </Context>,
    );

    fireEvent.input(getByLabelText(/^Closure/), payload);
    expect(getByDisplayValue('9')).toBeVisible();

    fireEvent.input(getByLabelText(/^EUR/), payload);
    expect(getByDisplayValue('1')).toBeVisible();
  });

  it('should throw when Converter is not a child of FestivalProvider', () => {
    expect(() => render(<Converter />)).toThrow(
      'useFestivalState must be within FestivalProvider',
    );
  });
});
