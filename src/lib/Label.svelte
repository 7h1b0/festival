<script lang="ts">
  export let source: string;
  export let target: string;
  export let rate: number;
  export let htmlFor: string;

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

<label for={htmlFor}>
  <p>{source}</p>
  <small>{formatRate(source, target, rate)}</small>
</label>

<style>
  label {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: var(--color-title);
  }

  p {
    flex-grow: 0;
    font-weight: 700;
    letter-spacing: 0.05em;
  }
  small {
    font-size: 0.75rem;
  }
</style>
