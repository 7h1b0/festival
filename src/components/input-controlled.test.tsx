/** @jsx h */
import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';

import InputControlled from './input-controlled';

describe('InputControlled', () => {
  it('should call onChange when user is typing', () => {
    const handleChange = jest.fn();
    render(<InputControlled onChange={handleChange} id="test" value={1} />);

    fireEvent.input(screen.getByDisplayValue('1'), { target: { value: 2 } });

    expect(handleChange).toBeCalledWith(2);
  });
});
