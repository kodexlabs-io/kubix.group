<script lang="ts">
    import Header from './lib/Header.svelte';
    import LangSwitch from './lib/LangSwitch.svelte';
    import Owners from './lib/Owners.svelte';
    import Subsidiaries from './lib/Subsidiaries.svelte';
</script>

<LangSwitch />

<main>
    <Header />
    <Subsidiaries />
    <Owners />
</main>
