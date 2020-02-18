/** @jsx h */
import { h, FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Rate from 'components/rate';
import Input from 'components/input';
import useFocus from 'hooks/useFocus';
import { useFestivalState } from 'context/festival-context';
import { round } from '../modules/formatter';

const Converter: FunctionComponent<{}> = () => {
  const festival = useFestivalState();
  const inputEl = useFocus([festival.id]);
  const [value, setValue] = useState(0);

  useEffect(() => setValue(0), [festival.id]);

  return (
    <section class="bg-white rounded shadow uppercase p-8">
      <label
        htmlFor={festival.name}
        class="flex justify-between items-baseline"
      >
        <p class="text-gray-800 font-bold tracking-wider">
          {festival.currency}
        </p>
        <Rate rate={festival.rate} target="EUR" origin={festival.currency} />
      </label>

      <Input
        forwardRef={inputEl}
        id={festival.name}
        value={round(value)}
        onChange={setValue}
      />

      <div class="h-px my-6 bg-blue-500" />
      <label htmlFor="euros" class="flex justify-between items-baseline">
        <p class="text-gray-800 font-bold tracking-wider">EUR</p>
        <Rate
          rate={1 / festival.rate}
          origin="EUR"
          target={festival.currency}
        />
      </label>
      <Input
        id="euros"
        value={round(value * festival.rate)}
        onChange={value => setValue(value / festival.rate)}
      />
    </section>
  );
};

export default Converter;
