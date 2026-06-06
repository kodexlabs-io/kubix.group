<script lang="ts">
    import Header from './lib/Header.svelte';
    import { i18n } from './lib/i18n.svelte';
    import LangSwitch from './lib/LangSwitch.svelte';
    import Owners from './lib/Owners.svelte';
    import QrCode from './lib/QrCode.svelte';
    import Subsidiaries from './lib/Subsidiaries.svelte';

    const pageUrl = $derived(`https://kubix.group/${i18n.lang}/`);
    let mainHeight = $state(0);
</script>

<LangSwitch />

<div class="layout">
    <main bind:clientHeight={mainHeight}>
        <Header />
        <Subsidiaries />
        <Owners />
    </main>

    <QrCode value={pageUrl} size={mainHeight} />
</div>

<style>
    .layout {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .layout main {
        flex: 0 1 540px;
    }

    @media (max-width: 992px) {
        .layout {
            flex-direction: column;
        }

        .layout main {
            flex: 0 0 auto;
            width: 100%;
        }
    }
</style>
