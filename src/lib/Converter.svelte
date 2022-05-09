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

<section aria-live="polite">
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
    {value}
    on:input={handleCurrency}
  />

  <div>
    <hr />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
      />
    </svg>
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
    value={convertedValue}
    on:input={handleEur}
  />
</section>

<style>
  section {
    background: white;
    border-radius: 1rem;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 4px 16px;
    padding: 2rem;
    text-transform: uppercase;
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
  }
  hr {
    position: absolute;
    border: none;
    width: 100%;
    height: 1px;
    background-color: var(--color-primary);
  }

  svg {
    width: 2rem;
    height: 2rem;
    display: block;
    background-color: var(--color-primary);
    border-radius: 999px;
    padding: 0.5rem;
    z-index: 1;
  }
</style>
