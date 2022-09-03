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
  <fieldset>
    <legend>Conversion</legend>
    <label>
      Euro
      <input
        name="euro"
        step={0.01}
        placeholder="20"
        min={0}
        type="number"
        required
      />
    </label>
    <label>
      Currency
      <input
        name="value"
        step={0.01}
        placeholder="12"
        min={0}
        type="number"
        required
      />
    </label>
  </fieldset>
  <button> Submit </button>
</form>

<style>
  form {
    background: white;
    box-shadow: var(--shadow);
    padding: 2rem;
    text-transform: uppercase;
  }

  fieldset,
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: var(--rounded);
  }

  fieldset {
    border: 1px solid #cbd5e1;
  }

  legend {
    font-size: 0.9rem;
    color: var(--color-title);
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
