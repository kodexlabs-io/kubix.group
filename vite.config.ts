import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import htmlMinifier from 'vite-plugin-html-minifier-terser';

function minifyJsonLd(): Plugin {
    return {
        name: 'minify-json-ld',
        apply: 'build',
        enforce: 'post',
        generateBundle(_options, bundle) {
            for (const file of Object.values(bundle)) {
                if (file.type !== 'asset' || !file.fileName.endsWith('.html')) continue;
                file.source = String(file.source).replace(
                    /(<script type="?application\/ld\+json"?>)([\s\S]*?)(<\/script>)/g,
                    (_match, open, json, close) => open + JSON.stringify(JSON.parse(json)) + close,
                );
            }
        },
    };
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
        htmlMinifier({
            collapseWhitespace: true,
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
        }),
        minifyJsonLd(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: fileURLToPath(new URL('./index.html', import.meta.url)),
                en: fileURLToPath(new URL('./en/index.html', import.meta.url)),
                es: fileURLToPath(new URL('./es/index.html', import.meta.url)),
            },
        },
    },
});
