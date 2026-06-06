<script lang="ts">
    import Header from './lib/components/Header.svelte';
    import LangSwitch from './lib/components/LangSwitch.svelte';
    import Owners from './lib/components/Owners.svelte';
    import QrCode from './lib/components/QrCode.svelte';
    import Subsidiaries from './lib/components/Subsidiaries.svelte';
    import { i18n } from './lib/i18n/i18n.svelte';

    const pageUrl = $derived(`https://kubix.group/${i18n.lang}/`);
    let mainHeight = $state(0);

    let glowX = $state(50);
    let glowY = $state(38);

    /** Resume the ambient drift this many ms after the pointer goes idle. */
    const IDLE_DELAY = 2500;
    let lastPointerAt = 0;

    function handlePointer(event: PointerEvent) {
        lastPointerAt = performance.now();
        glowX = (event.clientX / window.innerWidth) * 100;
        glowY = (event.clientY / window.innerHeight) * 100;
    }

    $effect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let frame: number;

        function drift(now: number) {
            frame = requestAnimationFrame(drift);

            // Hand control back to the pointer until it has been idle a while.
            if (now - lastPointerAt < IDLE_DELAY) return;

            // Two out-of-phase sines trace an organic Lissajous wander across
            // the viewport, easing in as the pointer settles.
            const t = now / 1000;
            const ease = Math.min((now - lastPointerAt - IDLE_DELAY) / 800, 1);
            const targetX = 50 + Math.sin(t * 0.55) * 38;
            const targetY = 45 + Math.sin(t * 0.72 + 1.3) * 30;

            glowX += (targetX - glowX) * 0.08 * ease;
            glowY += (targetY - glowY) * 0.08 * ease;
        }

        frame = requestAnimationFrame(drift);
        return () => cancelAnimationFrame(frame);
    });
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
        transition: background 0.12s var(--ease);
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
