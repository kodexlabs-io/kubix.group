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
                {t.ukDetail}<a href="https://kodexlabs.io">kodexlabs.io</a>
            </div>
        </div>
    </li>
    <li>
        <img class="logo" src={kodexLogo} alt="Kodex Labs logo" />
        <div>
            <div class="name">Kodex Labs S.R.L</div>
            <div class="detail">
                {t.drDetail}<a href="https://kodexlabs.do">kodexlabs.do</a>
            </div>
        </div>
    </li>
</ul>

<style>
    .subsidiaries {
        list-style: none;
    }

    .subsidiaries li {
        display: flex;
        align-items: center;
        gap: 1rem;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 1rem 1.25rem;
    }

    .subsidiaries li + li {
        margin-top: 0.75rem;
    }

    .logo {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
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
    }

    .detail a:hover {
        text-decoration: underline;
    }
</style>
