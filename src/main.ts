import '@fontsource-variable/manrope/index.css';
import { mount } from 'svelte';
import App from './App.svelte';
import './app.css';
import { getLangFromPath, i18n } from './lib/i18n.svelte';

i18n.lang = getLangFromPath(location.pathname);

const app = mount(App, {
    target: document.getElementById('app')!,
});

export default app;
