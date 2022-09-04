<script lang="ts">
  export let festivalName: string;
  export let currencyName: string;
</script>

<header><h1>Enter conversion rate</h1></header>
<form method="get" action="/">
  <input name="name" type="hidden" value={festivalName} />
  <input name="currency" type="hidden" value={currencyName} />
  <label>
    Eur
    <input
      name="eur"
      step={0.01}
      placeholder="20"
      min={0}
      type="number"
      required
    />
  </label>
  <label>
    {currencyName}
    <input
      name="value"
      step={0.01}
      placeholder="12"
      min={0}
      type="number"
      required
    />
  </label>
  <button>Submit</button>
</form>

<style>
  button {
    background: var(--color-primary);
    color: white;
    border-radius: var(--rounded);
    padding: 0.75rem 0;
    border: none;
  }
</style>
