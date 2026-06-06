<script lang="ts">
    import Header from './lib/Header.svelte';
    import { i18n } from './lib/i18n.svelte';
    import LangSwitch from './lib/LangSwitch.svelte';
    import Owners from './lib/Owners.svelte';
    import QrCode from './lib/QrCode.svelte';
    import Subsidiaries from './lib/Subsidiaries.svelte';

    const pageUrl = $derived(`https://kubix.group/${i18n.lang}/`);
    let mainHeight = $state(0);

    let glowX = $state(50);
    let glowY = $state(38);

    function handlePointer(event: PointerEvent) {
        glowX = (event.clientX / window.innerWidth) * 100;
        glowY = (event.clientY / window.innerHeight) * 100;
    }
</script>

<svelte:window onpointermove={handlePointer} />

<div class="glow" style="--mx:{glowX}%; --my:{glowY}%" aria-hidden="true"></div>

<LangSwitch />

<div class="layout">
    <main bind:clientHeight={mainHeight}>
        <Header {pageUrl} />
        <Subsidiaries />
        <Owners />
    </main>

    <QrCode value={pageUrl} size={mainHeight} />
</div>

<style>
    .glow {
        position: fixed;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        background: radial-gradient(
            420px circle at var(--mx, 50%) var(--my, 38%),
            rgba(125, 195, 255, 0.1),
            transparent 65%
        );
        transition: background 0.25s var(--ease);
    }

    @media (prefers-reduced-motion: reduce) {
        .glow {
            display: none;
        }
    }

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

        /* The standalone QR collapses into the intro paragraph (see Header). */
        .layout > :global(.qr) {
            display: none;
        }
    }
</style>
