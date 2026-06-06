<script lang="ts">
    import QRCode from 'qrcode';

    let { value, size = 0 }: { value: string; size?: number } = $props();

    let svg = $state('');

    $effect(() => {
        QRCode.toString(value, {
            type: 'svg',
            margin: 1,
            color: { dark: '#3e7fc0cc', light: '#00000000' },
        })
            .then(result => (svg = result))
            .catch(() => (svg = ''));
    });
</script>

<a
    class="qr"
    style={size ? `--qr-size:${size}px` : ''}
    href={value}
    aria-label="QR code linking to this page"
>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html svg}
</a>

<style>
    .qr {
        height: min(var(--qr-size, 9999px), 34vw);
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 16px;
        box-shadow: var(--shadow);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        flex-shrink: 0;
        line-height: 0;
        transition:
            transform 0.3s var(--ease),
            border-color 0.3s var(--ease),
            box-shadow 0.3s var(--ease);
    }

    .qr:hover {
        transform: translateY(-3px);
        border-color: var(--border-hover);
        box-shadow: var(--shadow-hover);
    }

    .qr :global(svg) {
        width: 100%;
        height: 100%;
        display: block;
    }

    @media (max-width: 992px) {
        .qr {
            height: auto;
            width: min(260px, 70vw);
        }
    }
</style>
