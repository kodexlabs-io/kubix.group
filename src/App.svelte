<script lang="ts">
    import { onMount } from 'svelte';
    import { initLang } from './lib/i18n.svelte';
    import LangSwitch from './lib/LangSwitch.svelte';
    import Header from './lib/Header.svelte';
    import Subsidiaries from './lib/Subsidiaries.svelte';
    import Owners from './lib/Owners.svelte';

    onMount(initLang);
</script>

<LangSwitch />

<main>
    <Header />
    <Subsidiaries />
    <Owners />
</main>
