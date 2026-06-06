<script lang="ts">
    import kubixLogo from './assets/kubix-logo.svg';
    import { i18n, translations } from './i18n.svelte';
    import QrCode from './QrCode.svelte';

    let { pageUrl }: { pageUrl: string } = $props();

    const t = $derived(translations[i18n.lang]);

    let typed = $state('');
    let typing = $state(false);

    $effect(() => {
        const full = t.intro;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            typed = full;
            typing = false;
            return;
        }

        typed = '';
        typing = true;
        let i = 0;
        let step: ReturnType<typeof setInterval>;

        const start = setTimeout(() => {
            step = setInterval(() => {
                typed = full.slice(0, ++i);
                if (i >= full.length) {
                    clearInterval(step);
                    typing = false;
                }
            }, 22);
        }, 250);

        return () => {
            clearTimeout(start);
            clearInterval(step);
        };
    });
</script>

<div class="header">
    <img class="brand-logo" src={kubixLogo} alt="Kubix Inc. logo" />
    <div>
        <h1>Kubix Inc.</h1>
        <p class="meta">
            {t.metaLine}
            <a href="mailto:corporate@kubix.group">corporate@kubix.group</a>
        </p>
        <p class="intro">
            <span class="intro-qr"><QrCode value={pageUrl} /></span>
            <span class="intro-text">
                <span class="intro-sizer" aria-hidden="true">{t.intro}</span>
                <span class="intro-typed" aria-hidden="true">
                    {typed}
                    <span class="caret" class:caret-hidden={!typing}></span>
                </span>
            </span>
            <span class="sr-only">{t.intro}</span>
        </p>
    </div>
</div>

<style>
    .header {
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;
    }

    .brand-logo {
        width: 72px;
        height: 72px;
        flex-shrink: 0;
        filter: drop-shadow(0 4px 16px rgba(125, 195, 255, 0.25));
    }

    h1 {
        font-size: 1.75rem;
        font-weight: 800;
        letter-spacing: -0.02em;
        margin-bottom: 0.5rem;
        background: linear-gradient(180deg, #ffffff, #c9d4e3);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    .meta {
        color: var(--text-dim);
        font-size: 0.9rem;
        margin-bottom: 2rem;
    }

    .meta a {
        color: var(--accent);
        text-decoration: none;
        transition: opacity 0.2s var(--ease);
    }

    .meta a:hover {
        text-decoration: underline;
        opacity: 0.8;
    }

    .intro {
        color: var(--text-dim);
        margin-bottom: 2rem;
    }

    .intro-text {
        position: relative;
        display: block;
    }

    .intro-sizer {
        visibility: hidden;
    }

    .intro-typed {
        position: absolute;
        inset: 0;
    }

    .caret {
        display: inline-block;
        width: 2px;
        height: 1.05em;
        margin-left: 1px;
        vertical-align: text-bottom;
        background: var(--accent);
        animation: caret-blink 1s steps(1, end) infinite;
    }

    .caret-hidden {
        opacity: 0;
        animation: none;
    }

    @keyframes caret-blink {
        0%,
        50% {
            opacity: 1;
        }
        50.01%,
        100% {
            opacity: 0;
        }
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    .intro-qr {
        display: none;
    }

    @media (max-width: 992px) {
        .intro {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .intro-qr {
            display: block;
            flex: 0 0 auto;
            width: clamp(76px, 22vw, 110px);
            order: 1;
        }

        .intro-qr :global(.qr) {
            width: 100%;
            height: auto;
            aspect-ratio: auto;
            padding: 0.4rem;
            border-radius: 12px;
        }

        .intro-qr :global(.qr svg) {
            height: auto;
        }
    }
</style>
