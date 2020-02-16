import React from 'react';
import { formatRate } from 'modules/formatter';

type Props = {
  rate: number;
  origin: string;
  target: string;
  amount?: number;
};

const Rate: React.FC<Props> = ({ rate, origin, target, amount = 1 }) => (
  <p className="text-xs text-gray-600">
    {formatRate(rate, origin, target, amount)}
  </p>
);

export default Rate;
