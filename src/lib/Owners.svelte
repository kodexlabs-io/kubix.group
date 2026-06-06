<script lang="ts">
    import andyAvatar from './assets/andy-avatar.avif';
    import domAvatar from './assets/dom-avatar.avif';
    import { i18n, translations } from './i18n.svelte';

    const t = $derived(translations[i18n.lang]);
</script>

<p class="section-title">{t.ownership}</p>
<ul class="directors">
    <li>
        <img class="avatar" src={andyAvatar} alt="Andy Phillips" />
        <div>
            <div class="name">
                <a href="https://www.linkedin.com/in/andrew-p-739b0b26/" target="_blank" rel="noopener">
                    Andy Phillips
                </a>
            </div>
            <div class="role">{t.ownerPresident}</div>
        </div>
    </li>
    <li>
        <img class="avatar" src={domAvatar} alt="Dom Robinson" />
        <div>
            <div class="name">
                <a href="https://www.linkedin.com/in/dcrdev/" target="_blank" rel="noopener">Dom Robinson</a>
            </div>
            <div class="role">{t.ownerDirector}</div>
        </div>
    </li>
</ul>

<style>
    .directors {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    .directors li {
        position: relative;
        flex: 1 1 200px;
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

    .directors li:hover {
        transform: translateY(-3px);
        border-color: var(--border-hover);
        background: var(--surface-hover);
        box-shadow: var(--shadow-hover);
    }

    .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        flex-shrink: 0;
        border: 1px solid var(--border);
        transition:
            transform 0.3s var(--ease),
            border-color 0.3s var(--ease);
    }

    .directors li:hover .avatar {
        transform: scale(1.06);
        border-color: var(--border-hover);
    }

    .name {
        font-weight: 700;
    }

    .name a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s var(--ease);
    }

    .name a::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
    }

    .directors li:hover .name a {
        color: var(--accent);
    }

    .role {
        color: var(--text-dim);
        font-size: 0.9rem;
    }
</style>
