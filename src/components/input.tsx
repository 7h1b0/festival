/** @jsx h */
import { h, Ref, RenderableProps } from 'preact';

type Props = {
  label: string;
  forwardRef: Ref<HTMLInputElement>;
  type?: string;
  placeholder?: string;
};

function Input({
  label,
  type = 'text',
  forwardRef,
  placeholder = '',
}: RenderableProps<Props>) {
  return (
    <label class="pb-4 block text-gray-800 font-bold text-sm tracking-wider">
      {label}
      <input
        ref={forwardRef}
        type={type}
        step={0.01}
        class="mt-1 block w-full text-3xl rounded border border-gray-400 focus:border-indigo-600"
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input;
