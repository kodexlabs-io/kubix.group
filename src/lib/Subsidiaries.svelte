<script lang="ts">
    import kodexLogo from './assets/kodex-logo.svg';
    import { i18n, translations } from './i18n.svelte';

    const t = $derived(translations[i18n.lang]);
</script>

<p class="section-title">{t.subsidiaries}</p>
<ul class="subsidiaries">
    <li>
        <img class="logo" src={kodexLogo} alt="Kodex Labs logo" />
        <div>
            <div class="name">Kodex Labs Ltd</div>
            <div class="detail">
                {t.ukDetail}
                <a href="https://kodexlabs.io">kodexlabs.io</a>
            </div>
        </div>
    </li>
    <li>
        <img class="logo" src={kodexLogo} alt="Kodex Labs logo" />
        <div>
            <div class="name">Kodex Labs S.R.L</div>
            <div class="detail">
                {t.drDetail}
                <a href="https://kodexlabs.do">kodexlabs.do</a>
            </div>
        </div>
    </li>
</ul>

<style>
    .subsidiaries {
        list-style: none;
    }

    .subsidiaries li {
        position: relative;
        display: flex;
        align-items: center;
        gap: 1rem;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 1rem 1.25rem;
        box-shadow: var(--shadow);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition:
            transform 0.3s var(--ease),
            border-color 0.3s var(--ease),
            background 0.3s var(--ease),
            box-shadow 0.3s var(--ease);
    }

    .subsidiaries li:hover {
        transform: translateY(-3px);
        border-color: var(--border-hover);
        background: var(--surface-hover);
        box-shadow: var(--shadow-hover);
    }

    .subsidiaries li + li {
        margin-top: 0.75rem;
    }

    .logo {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        transition: transform 0.3s var(--ease);
    }

    .subsidiaries li:hover .logo {
        transform: scale(1.06);
    }

    .name {
        font-weight: 700;
    }

    .detail {
        color: var(--text-dim);
        font-size: 0.9rem;
    }

    .detail a {
        color: var(--accent);
        text-decoration: none;
        transition: opacity 0.2s var(--ease);
    }

    .detail a::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
    }

    .subsidiaries li:hover .detail a {
        text-decoration: underline;
    }
</style>
