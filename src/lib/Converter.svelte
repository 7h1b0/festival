<script lang="ts">
  import type { Festival } from 'src/festival';
  import Label from './Label.svelte';

  export let festival: Festival;

  function round(value: number): number {
    return Math.round(value * 100) / 100;
  }

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    value = target.valueAsNumber / festival.rate;
  }

  let value = 0;
  $: convertedValue = round(value * festival.rate);
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
    bind:value
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
    on:input={handleInput}
  />
</div>
