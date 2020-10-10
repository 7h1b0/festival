/** @jsx h */
import { h, Ref } from 'preact';

type Props = {
  label: string;
  type?: string;
  forwardRef?: Ref<HTMLInputElement>;
  placeholder?: string;
};

function Input({ label, type = 'text', forwardRef, placeholder = '' }: Props) {
  return (
    <label class="pb-4 block text-gray-800 font-bold text-sm tracking-wider">
      {label}
      <input
        ref={forwardRef}
        type={type}
        step={0.01}
        class="mt-1 block w-full text-3xl rounded border border-gray-400 focus:border-blue-500"
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input;
