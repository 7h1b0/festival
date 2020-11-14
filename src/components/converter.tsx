/** @jsx h */
import { h, RenderableProps } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Label from 'components/label';
import Input from 'components/input-controlled';
import useFocus from 'hooks/useFocus';
import { round } from 'modules/formatter';
import type { Festival } from 'src/festivals';

type Props = {
  festival: Festival;
};
function Converter({ festival }: RenderableProps<Props>) {
  const inputEl = useFocus();
  const [value, setValue] = useState(0);

  useEffect(() => setValue(0), [festival.rate]);

  return (
    <main class="bg-white rounded shadow uppercase p-8">
      <Label
        htmlFor={`${festival.rate}`}
        source={festival.currency}
        target="EUR"
        rate={festival.rate}
      />

      <Input
        forwardRef={inputEl}
        id={`${festival.rate}`}
        value={round(value)}
        onChange={setValue}
      />

      <div class="h-px my-6 bg-indigo-600" />

      <Label
        htmlFor="euros"
        source="EUR"
        target={festival.currency}
        rate={1 / festival.rate}
      />
      <Input
        id="euros"
        value={round(value * festival.rate)}
        onChange={(value) => setValue(value / festival.rate)}
      />
    </main>
  );
}

export default Converter;
