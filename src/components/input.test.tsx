import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Input from './input';

describe('Input', () => {
  it('should call onChange when user typing', () => {
    const handleChange = jest.fn();
    const { getByDisplayValue } = render(
      <Input onChange={handleChange} id="test" value={1} />,
    );

    fireEvent.change(getByDisplayValue('1'), { target: { value: 2 } });

    expect(handleChange).toBeCalledWith(2);
  });
});
