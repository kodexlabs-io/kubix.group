<p align="center">
<a target="_blank" href="https://kodexlabs.io/"><img width="150" height="150" src="./.kodex/logo-icon.svg"></a>
</p>
<p align="center">
<a href="https://github.com/kodexlabs-io/kubix.group/actions/workflows/deploy.yml"><img src="https://github.com/kodexlabs-io/kubix.group/actions/workflows/deploy.yml/badge.svg" alt="Deploy to GitHub Pages"></a>&nbsp;<a href="https://svelte.dev/" target="_blank"><img src="https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=white" alt="Svelte"></a>&nbsp;<a href="https://vite.dev/" target="_blank"><img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite"></a>
<br />
<a href="https://kubix.group/" target="_blank">Kubix</a> Inc.
</p>

Landing page for Kubix Inc., the Panama holding company that owns Kodex Labs in the United Kingdom and the Dominican Republic. Built with Svelte and Vite, and deployed to GitHub Pages.

## Group structure

| Entity | Jurisdiction | Company number | Site |
| --- | --- | --- | --- |
| Kubix Inc. | Panama | 155784730 | https://kubix.group |
| Kodex Labs Ltd | United Kingdom | 16813371 | https://kodexlabs.io |
| Kodex Labs S.R.L | Dominican Republic | 00000000 | https://kodexlabs.do |

## Development

```bash
npm install        # install dependencies
npm run dev        # start the dev server
npm run build      # build for production (outputs to dist/)
npm run preview    # preview the production build
npm run check      # type-check the project
npm run lint       # lint with ESLint
npm run format     # format with Prettier
npm run format:check # verify formatting without writing
```

The site is a client-rendered single-page app. UI text is available in English (UK) and Spanish via a language toggle; translations live in `src/lib/i18n.svelte.ts`.

## Code style

Linting uses [ESLint](https://eslint.org/) (flat config in `eslint.config.mjs`) with `typescript-eslint` and `eslint-plugin-svelte`. Formatting uses [Prettier](https://prettier.io/) (`.prettierrc`) with `prettier-plugin-svelte` and `prettier-plugin-organize-imports`; `eslint-config-prettier` defers all formatting rules to Prettier.
