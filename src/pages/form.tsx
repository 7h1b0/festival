/** @jsx h */
import { h } from 'preact';
import { useRef, useState } from 'preact/hooks';

import Input from 'components/input';
import { isValidFestival } from 'modules/useFestival';

function Form() {
  const [hasError, setError] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const currencyRef = useRef<HTMLInputElement>(null);
  const rateRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: h.JSX.TargetedEvent<HTMLFormElement, Event>) {
    e.preventDefault();

    const name = nameRef.current.value;
    const currency = currencyRef.current.value;
    const rate = rateRef.current.value;

    if (isValidFestival(name, currency, rate)) {
      const search = new URLSearchParams({
        name,
        currency,
        rate,
      });
      history.replaceState({ page: 3 }, name, `/?${search}`);
      location.reload();
    } else {
      setError(true);
    }
  }

  return (
    <div class="flex flex-col lg:justify-center lg:h-full lg:max-w-lg mx-auto">
      <h1 class="font-bold text-lg text-gray-800 p-8 ">Create a festival</h1>
      <form
        class="bg-white rounded shadow uppercase p-8"
        onSubmit={handleSubmit}
      >
        {hasError && <p>Form is invalid</p>}
        <Input forwardRef={nameRef} label={'name'} placeholder="Tomorrowland" />
        <Input
          forwardRef={currencyRef}
          label={'currency'}
          placeholder="Pearl"
        />
        <Input
          forwardRef={rateRef}
          type={'number'}
          label={'rate'}
          placeholder="1.6"
        />
        <button class="bg-blue-500 text-white rounded px-5 py-3 m-auto block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
