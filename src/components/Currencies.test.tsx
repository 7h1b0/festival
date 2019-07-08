import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Currencies from './Currencies';

it('should call handleChange when user select a currency', () => {
  const handleChange = jest.fn();
  const { queryByText, getByTitle } = render(
    <Currencies
      currencies={[
        { festival: 'DOLLAR', name: 'USD', rate: 1, id: 1 },
        { festival: 'EURO', name: 'EUR', rate: 2, id: 2 },
      ]}
      selected={2}
      onChange={handleChange}
    />,
  );

  expect(queryByText('EURO')).toBeTruthy();
  expect(queryByText('DOLLAR')).toBeTruthy();

  fireEvent.change(getByTitle('currencies'));
  expect(handleChange).toHaveBeenCalledTimes(1);
});
