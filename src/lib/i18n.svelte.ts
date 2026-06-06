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
        ownerDirector: 'Owner · Director',
    },
    es: {
        metaLine: 'Panamá 🇵🇦 · Sociedad N.º 155784730 · ',
        intro: 'Kubix Inc. es una sociedad holding panameña propietaria de Kodex Labs Ltd (Reino Unido) y Kodex Labs S.R.L (República Dominicana).',
        subsidiaries: 'Filiales',
        ukDetail: 'Reino Unido 🇬🇧 · Sociedad N.º 16813371 · ',
        drDetail: 'República Dominicana 🇩🇴 · ',
        ownership: 'Estructura de propiedad',
        ownerPresident: 'Propietario · Presidente',
        ownerDirector: 'Propietario · Director',
    },
} as const;

export const i18n = $state<{ lang: Lang }>({ lang: 'en' });

export function getLangFromPath(pathname: string): Lang {
    return pathname.startsWith('/es') ? 'es' : 'en';
}
