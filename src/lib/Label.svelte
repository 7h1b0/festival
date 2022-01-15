<script lang="ts">
  export let source: string;
  export let target: string;
  export let rate: number;
  export let htmlFor: string;

  const numberFormat = new Intl.NumberFormat(navigator.language, {
    style: 'decimal',
    maximumFractionDigits: 2,
  });

  function formatPrice(number: number): string {
    return numberFormat.format(number);
  }

  function formatRate(
    currencySource: string,
    currencyTarget: string,
    rate: number,
  ) {
    return `1 ${currencySource} = ${formatPrice(rate)} ${currencyTarget}`;
  }
</script>

<label for={htmlFor} class="flex justify-between items-baseline text-slate-800">
  <p class="font-bold tracking-wider truncate flex-grow-0">{source}</p>
  <p class="text-xs">{formatRate(source, target, rate)}</p>
</label>
