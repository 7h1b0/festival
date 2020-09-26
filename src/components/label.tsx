/** @jsx h */
import { h, RenderableProps } from 'preact';
import { formatRate } from 'modules/formatter';

type Props = {
  source: string;
  target: string;
  rate: number;
  htmlFor: string;
};

function Label({ source, target, rate, htmlFor }: RenderableProps<Props>) {
  return (
    <label htmlFor={htmlFor} class="flex justify-between items-baseline">
      <p class="text-gray-800 font-bold tracking-wider truncate flex-grow-0">
        {source}
      </p>
      <p class="text-xs text-gray-600">{formatRate(source, target, rate)}</p>
    </label>
  );
}

export default Label;
