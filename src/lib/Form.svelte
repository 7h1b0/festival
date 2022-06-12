<header><h1>Create a festival</h1></header>
<form method="get" action="/">
  <label>
    name
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
    currency
    <input
      name="currency"
      step={0.01}
      placeholder="Pearl"
      pattern={String.raw`[\w\s]{2,}`}
      type="text"
      required
    />
  </label>
  <label>
    rate
    <input
      name="rate"
      step={0.01}
      placeholder="1.6"
      min={0}
      type="number"
      required
    />
  </label>
  <button> Submit </button>
</form>

<style>
  form {
    background: white;
    border-radius: var(--rounded);
    box-shadow: var(--shadow);
    padding: 2rem;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  label {
    color: var(--color-title);
    letter-spacing: 0.05em;
    font-weight: 700;
  }

  button {
    background: var(--color-primary);
    color: white;
    border-radius: var(--rounded);
    padding: 0.75rem 0;
    border: none;
  }
</style>
