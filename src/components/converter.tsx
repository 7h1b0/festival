import React from 'react';
import Rate from 'components/rate';
import Input from 'components/input';
import useConverter from 'hooks/useConverter';
import useFocus from 'hooks/useFocus';
import { useFestivalState } from 'context/festival-context';

const Converter: React.FC<{}> = () => {
  const festival = useFestivalState();
  const inputEl = useFocus([festival]);
  const [{ value, euros }, dispatch] = useConverter(
    festival ? festival.rate : 0,
  );

  if (festival === null) {
    return null;
  }

  return (
    <section className="bg-white rounded shadow uppercase p-8">
      <label
        htmlFor={festival.name}
        className="text-gray-800 font-bold tracking-wider"
      >
        {festival.currency}
      </label>
      <Rate rate={festival.rate} target="EUR" origin={festival.currency} />
      <Input
        ref={inputEl}
        id={festival.name}
        value={value}
        onChange={e => {
          dispatch({ type: 'TO_EUROS', data: Number(e.target.value) });
        }}
      />

      <div className="h-px my-6 bg-blue-500" />
      <label htmlFor="euros" className="text-gray-800 font-bold tracking-wider">
        EUR
      </label>
      <Rate rate={1 / festival.rate} origin="EUR" target={festival.currency} />
      <Input
        id="euros"
        value={euros}
        onChange={e => {
          dispatch({ type: 'TO_CURRENCY', data: Number(e.target.value) });
        }}
      />
    </section>
  );
};

export default Converter;