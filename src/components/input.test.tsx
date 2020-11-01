/** @jsx h */
import { h, RefCallback } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';

import Input from './input';

describe('Input', () => {
  it('should support ref', () => {
    let holdRef: HTMLInputElement | null = null;
    const forwardRef: RefCallback<HTMLInputElement> = (ref) => {
      holdRef = ref;
    };

    render(<Input label="test" forwardRef={forwardRef} />);

    fireEvent.input(screen.getByLabelText('test'), {
      target: { value: 'hello!' },
    });

    expect(holdRef).not.toBe(null);
    // @ts-ignore holdRef is not null anymore
    expect(holdRef.value).toBe('hello!');
  });
});
