/** @jsx h */
import { h, RenderableProps } from 'preact';
import { formatRate } from 'modules/formatter';

type Props = {
  source: string;
  target: string;
  rate: number;
};

function Rate({ rate, source, target }: RenderableProps<Props>) {
  return (
    <p class="text-xs text-gray-600">{formatRate(source, target, rate)}</p>
  );
}

export default Rate;
