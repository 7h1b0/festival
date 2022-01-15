<script lang="ts">
  export let title: string;
  const canShare = !!navigator.share;

  function handleClick() {
    if (canShare) {
      navigator.share({
        text: title,
        url: window.location.toString(),
      });
    } else {
      navigator.clipboard.writeText(window.location.toString());
    }
  }

  const shareLabel = canShare ? 'Share' : 'Copy URL';
</script>

<header class="flex justify-between p-8 ">
  <h1 class="font-bold text-lg text-slate-800 capitalize flex-grow-0 truncate">
    {title}
  </h1>
  <button
    on:click={handleClick}
    class="w-6 text-slate-600 flex-shrink-0"
    aria-label="Share"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
      />
      <title>{shareLabel}</title>
    </svg>
  </button>
</header>
