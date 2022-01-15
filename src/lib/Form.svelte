<script lang="ts">
  let name = '';
  let currency = '';
  let rate = '';

  function handleSubmit(e: Event) {
    e.preventDefault();
    const search = new URLSearchParams({
      name,
      currency,
      rate,
    });
    history.replaceState({}, '', `/?${search}`);
    history.go();
  }
</script>

<h1 class="font-bold text-lg text-slate-800 p-8 ">Create a festival</h1>
<form class="bg-white rounded shadow uppercase p-8" on:submit={handleSubmit}>
  <label class="pb-4 block text-slate-800 font-bold text-sm tracking-wider">
    name
    <input
      step={0.01}
      class="mt-1 input"
      placeholder="Tomorrowland"
      pattern={String.raw`[\w\s]{2,20}`}
      type="text"
      required
      bind:value={name}
    />
  </label>
  <label class="pb-4 block text-slate-800 font-bold text-sm tracking-wider">
    currency
    <input
      step={0.01}
      class="mt-1 input"
      placeholder="Pearl"
      pattern={String.raw`[\w\s]{2,20}`}
      type="text"
      required
      bind:value={currency}
    />
  </label>
  <label class="pb-4 block text-slate-800 font-bold text-sm tracking-wider">
    rate
    <input
      step={0.01}
      class="mt-1 input"
      placeholder="1.6"
      min={0}
      type="number"
      required
      bind:value={rate}
    />
  </label>
  <button
    class="bg-indigo-600 text-white rounded w-full py-3 mt-3 m-auto block"
  >
    Submit
  </button>
</form>
