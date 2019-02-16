import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Currencies from '../Currencies';

describe('Currencies', () => {
  it('should render correctly', () => {
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
});
