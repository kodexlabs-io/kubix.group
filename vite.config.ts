import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [svelte()],
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
