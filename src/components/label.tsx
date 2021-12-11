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
    <label
      htmlFor={htmlFor}
      class="flex justify-between items-baseline text-slate-800"
    >
      <p class="font-bold tracking-wider truncate flex-grow-0">{source}</p>
      <p class="text-xs">{formatRate(source, target, rate)}</p>
    </label>
  );
}

export default Label;
