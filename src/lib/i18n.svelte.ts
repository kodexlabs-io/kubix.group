export type Lang = 'en' | 'es';

export const translations = {
    en: {
        metaLine: 'Panama 🇵🇦 · Company No. 155784730 · ',
        intro: 'Kubix Inc. is a Panama holding company that owns Kodex Labs Ltd (United Kingdom) and Kodex Labs S.R.L (Dominican Republic).',
        subsidiaries: 'Subsidiaries',
        ukDetail: 'United Kingdom 🇬🇧 · Company No. 16813371 · ',
        drDetail: 'Dominican Republic 🇩🇴 · ',
        ownership: 'Ownership structure',
        ownerPresident: 'Owner · President',
        owner: 'Owner',
    },
    es: {
        metaLine: 'Panamá 🇵🇦 · Sociedad N.º 155784730 · ',
        intro: 'Kubix Inc. es una sociedad holding panameña propietaria de Kodex Labs Ltd (Reino Unido) y Kodex Labs S.R.L (República Dominicana).',
        subsidiaries: 'Filiales',
        ukDetail: 'Reino Unido 🇬🇧 · Sociedad N.º 16813371 · ',
        drDetail: 'República Dominicana 🇩🇴 · ',
        ownership: 'Estructura de propiedad',
        ownerPresident: 'Propietario · Presidente',
        owner: 'Propietario',
    },
} as const;

const STORAGE_KEY = 'lang';

/** Reactive language state shared across components. */
export const i18n = $state<{ lang: Lang }>({ lang: 'en' });

/** Sets the active language, syncs the document and persists the choice. */
export function setLang(lang: Lang): void {
    i18n.lang = lang;
    document.documentElement.lang = lang === 'es' ? 'es' : 'en-GB';
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch {
        /* storage unavailable */
    }
}

/** Resolves the initial language from storage, then browser preference. */
export function initLang(): void {
    let stored: string | null = null;
    try {
        stored = localStorage.getItem(STORAGE_KEY);
    } catch {
        /* storage unavailable */
    }

    if (stored === 'en' || stored === 'es') {
        setLang(stored);
        return;
    }

    const browserEs = (navigator.language || '').toLowerCase().startsWith('es');
    setLang(browserEs ? 'es' : 'en');
}
