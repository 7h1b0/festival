/** @jsx h */
import { h, Ref, RenderableProps } from 'preact';

type Props = {
  id: string;
  value: number;
  onChange: (value: number) => void;
  forwardRef?: Ref<HTMLInputElement>;
};

function Input({ id, value, onChange, forwardRef }: RenderableProps<Props>) {
  return (
    <input
      ref={forwardRef}
      id={id}
      type="number"
      step={0.01}
      value={value || ''}
      onInput={({
        currentTarget,
      }: h.JSX.TargetedEvent<HTMLInputElement, Event>) => {
        onChange(Number(currentTarget.value));
      }}
      class="mt-3 input"
    />
  );
}

export default Input;
