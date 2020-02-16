import React from 'react';
import { render, fireEvent } from '@testing-library/react';

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

    fireEvent.change(getByLabelText(festival.currency), payload);
    expect(getByDisplayValue('9')).toBeVisible();

    fireEvent.change(getByLabelText('EUR'), payload);
    expect(getByDisplayValue('1')).toBeVisible();
  });
});
