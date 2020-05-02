/** @jsx h */
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

import Input from './input';

describe('Input', () => {
  it('should call onChange when user is typing', () => {
    const handleChange = jest.fn();
    const { getByDisplayValue } = render(
      <Input onChange={handleChange} id="test" value={1} />,
    );

    fireEvent.input(getByDisplayValue('1'), { target: { value: 2 } });

    expect(handleChange).toBeCalledWith(2);
  });
});
