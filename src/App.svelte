<script lang="ts">
  import Header from './lib/Header.svelte';
  import Converter from './lib/Converter.svelte';
  import Form from './lib/Form.svelte';
  import Rate from './lib/Rate.svelte';
  import { getFestivalFromSearchLocation } from './lib/utils';
  import './global.css';

  const output = getFestivalFromSearchLocation(window.location.search);
</script>

<main>
  {#if output.status === 'success'}
    <Header title={output.data.name} />
    <Converter festival={output.data} />
  {:else if output.status === 'partial'}
    <Rate festivalName={output.data.name} currencyName={output.data.currency} />
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
