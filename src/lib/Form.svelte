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
    border-radius: 1rem;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 4px 16px;
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
    border-radius: 0.25rem;
    padding: 0.75rem 0;
    border: none;
  }
</style>
