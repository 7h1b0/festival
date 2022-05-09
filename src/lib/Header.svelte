<script lang="ts">
  export let title: string;

  function handleClick() {
    if (!!navigator.share) {
      navigator.share({
        text: title,
        url: window.location.toString(),
      });
    } else {
      navigator.clipboard.writeText(window.location.toString());
    }
  }
</script>

<header>
  <h1>
    {title}
  </h1>
  <button on:click={handleClick} aria-label="Share" type="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="#1e293b"
      aria-hidden="true"
    >
      <path
        d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
      />
    </svg>
  </button>
</header>

<style>
  button {
    width: 1.5rem;
    flex-shrink: 0;
    border: none;
  }
</style>
