<script lang="ts">
  import type { Festival } from '../festival';
  import Label from './Label.svelte';

  export let festival: Festival;

  let value = 0;
  let convertedValue = 0;

  function round(value: number): number {
    return Math.round(value * 100) / 100;
  }

  function handleEur(e: Event) {
    const target = e.target as HTMLInputElement;
    value = round(target.valueAsNumber / festival.rate);
  }

  function handleCurrency(e: Event) {
    const target = e.target as HTMLInputElement;
    convertedValue = round(target.valueAsNumber * festival.rate);
  }
</script>

<div class="bg-white rounded shadow uppercase p-8" aria-live="polite">
  <Label
    htmlFor={festival.currency}
    source={festival.currency}
    target="EUR"
    rate={festival.rate}
  />

  <input
    id={festival.currency}
    type="number"
    step={0.01}
    class="mt-2 input"
    {value}
    on:input={handleCurrency}
  />

  <div class="flex items-center my-2">
    <hr class="h-px my-6 border-indigo-600 grow" />
    <div class="rounded-full bg-indigo-600 text-white p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
        />
      </svg>
    </div>
    <hr class="h-px border-indigo-600 grow" />
  </div>

  <Label
    htmlFor="euros"
    source="EUR"
    target={festival.currency}
    rate={1 / festival.rate}
  />
  <input
    id="euros"
    type="number"
    step={0.01}
    class="mt-2 input"
    value={convertedValue}
    on:input={handleEur}
  />
</div>
