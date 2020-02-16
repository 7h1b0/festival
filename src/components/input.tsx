import React from 'react';

type Props = {
  id: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = React.forwardRef(
  ({ id, value, onChange }: Props, ref?: React.Ref<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        id={id}
        type="number"
        step="0.01"
        value={value || ''}
        min={0}
        onChange={onChange}
        className="mt-3 block w-full text-3xl rounded border border-gray-400 focus:border-blue-500"
      />
    );
  },
);

export default Input;
