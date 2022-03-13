<h1 class="font-bold text-lg text-slate-800 p-8 ">Create a festival</h1>
<form
  class="bg-white rounded shadow uppercase p-8 flex flex-col gap-6"
  method="get"
  action="/"
>
  <label class="text-slate-800 font-bold text-sm tracking-wider">
    name
    <input
      name="name"
      step={0.01}
      class="mt-2 input"
      placeholder="Tomorrowland"
      pattern={String.raw`[\w\s]{2,}`}
      type="text"
      required
    />
  </label>
  <label class="text-slate-800 font-bold text-sm tracking-wider">
    currency
    <input
      name="currency"
      step={0.01}
      class="mt-2 input"
      placeholder="Pearl"
      pattern={String.raw`[\w\s]{2,}`}
      type="text"
      required
    />
  </label>
  <label class="text-slate-800 font-bold text-sm tracking-wider">
    rate
    <input
      name="rate"
      step={0.01}
      class="mt-2 input"
      placeholder="1.6"
      min={0}
      type="number"
      required
    />
  </label>
  <button class="bg-indigo-600 text-white rounded w-full py-3 m-auto">
    Submit
  </button>
</form>
