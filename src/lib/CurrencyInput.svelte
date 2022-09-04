<script lang="ts">
  export let source: string;
  export let target: string;
  export let rate: number;
  export let handleChange: (e: Event) => void;
  export let value: number;

  const numberFormat = new Intl.NumberFormat(navigator.language, {
    style: 'decimal',
    maximumFractionDigits: 2,
  });

  function formatRate(
    currencySource: string,
    currencyTarget: string,
    rate: number,
  ) {
    return `1 ${currencySource} = ${numberFormat.format(
      rate,
    )} ${currencyTarget}`;
  }
</script>

<label>
  <p>{source}</p>
  <small>{formatRate(source, target, rate)}</small>
  <input type="number" step={0.01} {value} on:input={handleChange} />
</label>

<style>
  label {
    display: grid;
    grid-template: auto / 1fr 1fr;
    align-items: baseline;
  }

  small {
    font-size: 0.75rem;
    font-weight: initial;
    text-align: end;
  }

  input {
    grid-column: 1 / 3;
  }
</style>
