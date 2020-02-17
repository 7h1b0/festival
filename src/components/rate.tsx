/** @jsx h */
import { h, FunctionComponent } from 'preact';
import { formatRate } from 'modules/formatter';

type Props = {
  rate: number;
  origin: string;
  target: string;
  amount?: number;
};

const Rate: FunctionComponent<Props> = ({
  rate,
  origin,
  target,
  amount = 1,
}) => (
  <p class="text-xs text-gray-600">
    {formatRate(rate, origin, target, amount)}
  </p>
);

export default Rate;
