/** @jsx h */
import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import Form from './form';

describe('Form', () => {
  it('should display an alert when form is invalid', () => {
    render(<Form />);

    userEvent.type(screen.getByRole('textbox', { name: 'name' }), '&&&&');
    userEvent.type(screen.getByRole('textbox', { name: 'currency' }), 'jest');
    userEvent.type(screen.getByRole('spinbutton', { name: 'rate' }), '1.8');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(
      screen.getByRole('alert', { name: 'Form is invalid' }),
    ).toBeVisible();

    userEvent.click(screen.getByRole('button', { name: 'close' }));
    expect(
      screen.queryByRole('alert', { name: 'Form is invalid' }),
    ).not.toBeInTheDocument();
  });

  it('should redirect the user when form is valid', () => {
    window.history.replaceState = jest.fn();

    render(<Form />);

    userEvent.type(screen.getByRole('textbox', { name: 'name' }), 'test');
    userEvent.type(screen.getByRole('textbox', { name: 'currency' }), 'jest');
    userEvent.type(screen.getByRole('spinbutton', { name: 'rate' }), '1.8');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(window.history.replaceState).toHaveBeenCalledWith(
      { page: 3 },
      'test',
      '/?name=test&currency=jest&rate=1.8',
    );
  });
});
