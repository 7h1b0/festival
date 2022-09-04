<header><h1>Create a festival</h1></header>
<form method="get" action="/">
  <label>
    festival name
    <input
      name="name"
      step={0.01}
      placeholder="Tomorrowland"
      pattern={String.raw`[\w\s]{2,}`}
      type="text"
      required
    />
  </label>
  <label>
    currency name
    <input
      name="currency"
      step={0.01}
      placeholder="Pearl"
      pattern={String.raw`[\w\s]{2,}`}
      type="text"
      required
    />
  </label>
  <button>Next</button>
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
