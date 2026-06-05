<script lang="ts">
    import { i18n, setLang } from './i18n.svelte';
</script>

<div class="lang-switch">
    <button type="button" class:active={i18n.lang === 'en'} onclick={() => setLang('en')}> EN </button>
    <button type="button" class:active={i18n.lang === 'es'} onclick={() => setLang('es')}> ES </button>
</div>

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

    .lang-switch button {
        font: inherit;
        font-size: 0.8rem;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: var(--text-dim);
        padding: 0.25rem 0.7rem;
        border-radius: 999px;
        line-height: 1;
    }

    .lang-switch button.active {
        background: var(--accent);
        color: #0b0e13;
    }
</style>
