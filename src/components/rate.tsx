/** @jsx h */
import { h, RenderableProps } from 'preact';
import { formatRate } from 'modules/formatter';

type Props = {
  rate: number;
  origin: string;
  target: string;
  amount?: number;
};

function Rate({ rate, origin, target, amount = 1 }: RenderableProps<Props>) {
  return (
    <p class="text-xs text-gray-600">
      {formatRate(rate, origin, target, amount)}
    </p>
  );
}

export default Rate;
