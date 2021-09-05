/** @jsx h */
import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import InputControlled from './input-controlled';

describe('InputControlled', () => {
  it('should call onChange when user is typing', () => {
    const handleChange = jest.fn();
    render(<InputControlled onChange={handleChange} id="test" value={1} />);

    userEvent.type(screen.getByRole('spinbutton'), '2');

    expect(handleChange).toBeCalledWith(12);
  });
});
