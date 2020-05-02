/** @jsx h */
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Rate from 'components/rate';
import Input from 'components/input';
import useFocus from 'hooks/useFocus';
import { round } from 'modules/formatter';
import type { Festival } from 'src/festivals';

type Props = {
  festival: Festival;
};
function Converter({ festival }: Props) {
  const inputEl = useFocus([festival.slug]);
  const [value, setValue] = useState(0);

  useEffect(() => setValue(0), [festival.slug]);

  return (
    <main class="bg-white rounded shadow uppercase p-8">
      <label
        htmlFor={festival.slug}
        class="flex justify-between items-baseline"
      >
        <p class="text-gray-800 font-bold tracking-wider">
          {festival.currency}
        </p>
        <Rate source={festival.currency} target="EUR" rate={festival.rate} />
      </label>

      <Input
        forwardRef={inputEl}
        id={festival.slug}
        value={round(value)}
        onChange={setValue}
      />

      <div class="h-px my-6 bg-blue-500" />
      <label htmlFor="euros" class="flex justify-between items-baseline">
        <p class="text-gray-800 font-bold tracking-wider">EUR</p>
        <Rate
          source="EUR"
          target={festival.currency}
          rate={1 / festival.rate}
        />
      </label>
      <Input
        id="euros"
        value={round(value * festival.rate)}
        onChange={(value) => setValue(value / festival.rate)}
      />
    </main>
  );
}

export default Converter;
