/** @jsx h */
import { h } from 'preact';
import { useRef, useState } from 'preact/hooks';

import Input from 'components/input';
import { isValidFestival } from 'modules/festival';

function Form() {
  const [hasError, setError] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const currencyRef = useRef<HTMLInputElement>(null);
  const rateRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: h.JSX.TargetedEvent<HTMLFormElement, Event>) {
    e.preventDefault();

    const name = nameRef.current ? nameRef.current.value : '';
    const currency = currencyRef.current ? currencyRef.current.value : '';
    const rate = rateRef.current ? rateRef.current.value : '';

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
    <div class="container">
      <h1 class="font-bold text-lg text-gray-800 p-8 ">Create a festival</h1>
      <form class="card" onSubmit={handleSubmit}>
        <Input forwardRef={nameRef} label="name" placeholder="Tomorrowland" />
        <Input forwardRef={currencyRef} label="currency" placeholder="Pearl" />
        <Input
          forwardRef={rateRef}
          type="number"
          label="rate"
          placeholder="1.6"
        />
        <button class="bg-indigo-600 text-white rounded w-full py-3 mt-3 m-auto block">
          Submit
        </button>
      </form>
      {hasError && (
        <div
          role="alert"
          aria-labelledby="alert-0"
          class="bg-red-700 rounded py-3 px-3 mt-3 text-white flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-8 h-8"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <p id="alert-0" class="normal-case px-3 flex-grow">
            Form is invalid
          </p>
          <button
            type="button"
            aria-label="close"
            onClick={() => setError(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-8 h-8"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Form;
