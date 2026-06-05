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

/** Reactive language state, derived from the active route. */
export const i18n = $state<{ lang: Lang }>({ lang: 'en' });

/** Resolves the active language from a URL pathname (e.g. /es/ -> 'es'). */
export function getLangFromPath(pathname: string): Lang {
    return pathname.startsWith('/es') ? 'es' : 'en';
}
