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
      class="mt-3 block w-full text-3xl rounded border border-gray-400 focus:border-blue-500 focus:outline-none"
    />
  );
}

export default Input;
