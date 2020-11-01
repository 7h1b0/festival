/** @jsx h */
import { h } from 'preact';
import { render, screen, fireEvent } from '@testing-library/preact';
import '@testing-library/jest-dom'; // fix TS issues

import Form from './form';

describe('Form', () => {
  it('should display an alert when form is invalid', () => {
    render(<Form />);

    fireEvent.input(screen.getByLabelText('name'), {
      target: { value: '&&&&' },
    });
    fireEvent.input(screen.getByLabelText('currency'), {
      target: { value: 'jest' },
    });
    fireEvent.input(screen.getByLabelText('rate'), {
      target: { value: '1.8' },
    });
    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Form is invalid')).toBeVisible();
    fireEvent.click(screen.getByLabelText('close'));
    expect(screen.queryByText('Form is invalid')).not.toBeInTheDocument();
  });

  it('should display an alert when form is invalid', () => {
    window.history.replaceState = jest.fn();

    render(<Form />);

    fireEvent.input(screen.getByLabelText('name'), {
      target: { value: 'test' },
    });
    fireEvent.input(screen.getByLabelText('currency'), {
      target: { value: 'jest' },
    });
    fireEvent.input(screen.getByLabelText('rate'), {
      target: { value: '1.8' },
    });
    fireEvent.click(screen.getByText('Submit'));

    expect(window.history.replaceState).toHaveBeenCalledWith(
      { page: 3 },
      'test',
      '/?name=test&currency=jest&rate=1.8',
    );
  });
});
