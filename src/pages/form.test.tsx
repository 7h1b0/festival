/** @jsx h */
import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import Form from './form';

describe('Form', () => {
  it('should display an alert when form is invalid', () => {
    render(<Form />);

    userEvent.type(screen.getByLabelText('name'), '&&&&');
    userEvent.type(screen.getByLabelText('currency'), 'jest');
    userEvent.type(screen.getByLabelText('rate'), '1.8');
    userEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Form is invalid')).toBeVisible();
    userEvent.click(screen.getByLabelText('close'));
    expect(screen.queryByText('Form is invalid')).not.toBeInTheDocument();
  });

  it('should display an alert when form is invalid', () => {
    window.history.replaceState = jest.fn();

    render(<Form />);

    userEvent.type(screen.getByLabelText('name'), 'test');
    userEvent.type(screen.getByLabelText('currency'), 'jest');
    userEvent.type(screen.getByLabelText('rate'), '1.8');
    userEvent.click(screen.getByText('Submit'));

    expect(window.history.replaceState).toHaveBeenCalledWith(
      { page: 3 },
      'test',
      '/?name=test&currency=jest&rate=1.8',
    );
  });
});
