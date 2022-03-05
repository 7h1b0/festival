<script lang="ts">
  import Header from './lib/Header.svelte';
  import Converter from './lib/Converter.svelte';
  import Form from './lib/Form.svelte';
  import { getFestivalFromSearchLocation } from './lib/utils';
  import './global.css';

  const festivalFromUrl = getFestivalFromSearchLocation(window.location.search);
</script>

<main class="flex flex-col lg:justify-center lg:h-screen lg:max-w-lg m-auto">
  {#if festivalFromUrl}
    <Header title={festivalFromUrl.name} />
    <Converter festival={festivalFromUrl} />
  {:else}
    <Form />
  {/if}
</main>
