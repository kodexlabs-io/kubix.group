<script lang="ts">
    import kubixLogo from './assets/kubix-logo.svg';
    import { i18n, translations } from './i18n.svelte';

    const t = $derived(translations[i18n.lang]);
</script>

<div class="header">
    <img class="brand-logo" src={kubixLogo} alt="Kubix Inc. logo" />
    <div>
        <h1>Kubix Inc.</h1>
        <p class="meta">
            {t.metaLine}<a href="mailto:corporate@kubix.group">corporate@kubix.group</a>
        </p>
        <p class="intro">{t.intro}</p>
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
    }

    h1 {
        font-size: 1.75rem;
        font-weight: 800;
        letter-spacing: -0.02em;
        margin-bottom: 0.5rem;
    }

    .meta {
        color: var(--text-dim);
        font-size: 0.9rem;
        margin-bottom: 2rem;
    }

    .meta a {
        color: var(--accent);
        text-decoration: none;
    }

    .meta a:hover {
        text-decoration: underline;
    }

    .intro {
        color: var(--text-dim);
        margin-bottom: 2rem;
    }
</style>
