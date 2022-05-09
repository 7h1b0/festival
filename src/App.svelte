<script lang="ts">
  import Header from './lib/Header.svelte';
  import Converter from './lib/Converter.svelte';
  import Form from './lib/Form.svelte';
  import { getFestivalFromSearchLocation } from './lib/utils';
  import './global.css';

  const festivalFromUrl = getFestivalFromSearchLocation(window.location.search);
</script>

<main>
  {#if festivalFromUrl}
    <Header title={festivalFromUrl.name} />
    <Converter festival={festivalFromUrl} />
  {:else}
    <Form />
  {/if}
</main>

<style>
  @media (min-width: 1024px) {
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100vh;
      max-width: 32rem;
      margin: 0 auto;
    }
  }
</style>
