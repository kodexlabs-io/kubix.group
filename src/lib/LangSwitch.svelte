<script lang="ts">
    import { i18n } from './i18n.svelte';
</script>

<nav class="lang-switch" aria-label="Language">
    <a href="/en/" hreflang="en-GB" class:active={i18n.lang === 'en'}>EN</a>
    <a href="/es/" hreflang="es" class:active={i18n.lang === 'es'}>ES</a>
</nav>

<style>
    .lang-switch {
        position: fixed;
        top: 1.25rem;
        right: 1.25rem;
        display: flex;
        gap: 0.25rem;
        padding: 0.25rem;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 999px;
    }

    .lang-switch a {
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--text-dim);
        text-decoration: none;
        padding: 0.25rem 0.7rem;
        border-radius: 999px;
        line-height: 1;
    }

    .lang-switch a.active {
        background: var(--accent);
        color: #0b0e13;
    }
</style>
