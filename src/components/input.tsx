/** @jsx h */
import { h, FunctionComponent, Ref } from 'preact';

type Props = {
  id: string;
  value: number;
  onChange: (value: number) => void;
  forwardRef?: Ref<HTMLInputElement>;
};

const Input: FunctionComponent<Props> = ({
  id,
  value,
  onChange,
  forwardRef,
}: Props) => (
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
    class="mt-3 block w-full text-3xl rounded border border-gray-400 focus:border-blue-500"
  />
);

export default Input;
