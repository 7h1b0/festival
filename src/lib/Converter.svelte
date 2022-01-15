<script lang="ts">
  import type { Festival } from 'src/festival';
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
    class="mt-3 input"
    {value}
    on:input={handleCurrency}
  />
  <hr class="h-px my-6 border-indigo-600" />

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
    class="mt-3 input"
    value={convertedValue}
    on:input={handleEur}
  />
</div>
