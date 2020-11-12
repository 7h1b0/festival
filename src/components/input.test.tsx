/** @jsx h */
import { h, RefCallback } from 'preact';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import Input from './input';

describe('Input', () => {
  it('should support ref', () => {
    let holdRef: HTMLInputElement | null = null;
    const forwardRef: RefCallback<HTMLInputElement> = (ref) => {
      holdRef = ref;
    };

    render(<Input label="test" forwardRef={forwardRef} />);

    userEvent.type(screen.getByLabelText('test'), 'hello!');

    expect(holdRef).not.toBe(null);
    // @ts-ignore holdRef is not null anymore
    expect(holdRef.value).toBe('hello!');
  });
});
