# AGENTS.md

## Project Overview

Vue 3 + TypeScript + Vite portfolio site (`projects.davidsabalete.com`). Single-package app, not a monorepo.

## Key Commands

- **Dev server**: `npm run dev` (Vite, HMR)
- **Build**: `npm run build` — runs `vue-tsc -b && vite build` (type-check must succeed before bundling)
- **Preview**: `npm run preview`
- **No test, lint, or typecheck scripts** exist in `package.json`

## Architecture

- Entry: `src/main.ts` → mounts `App.vue` into `#app` in `index.html`
- `src/App.vue` uses `<script setup>` SFC pattern (Vue 3)
- `src/components/` holds leaf components
- `src/style.css` is imported in `main.ts`
- `vite.config.ts` uses only `@vitejs/plugin-vue`

## TypeScript Setup

- **Project references**: `tsconfig.json` references `tsconfig.app.json` (app code) and `tsconfig.node.json` (vite config). Use `vue-tsc -b` to type-check all projects.
- `tsconfig.app.json`: extends `@vue/tsconfig/tsconfig.dom.json`, strict linting flags (`noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch`)
- `tsconfig.node.json`: `module: nodenext`, `noEmit`, `verbatimModuleSyntax`

## Tooling & Conventions

- **Package manager**: npm (has `package-lock.json`; no pnpm or yarn lockfiles)
- **VS Code**: recommended extension is `Vue.volar` (in `.vscode/extensions.json`)
- **TypeScript**: ~6.0.2, Vue 3.5.42, Vite 8.3.0
- `public/` serves static assets (`favicon.svg`, `icons.svg`)

## Gotchas

- `build` requires `vue-tsc -b` to pass first — do not skip it. If type errors exist, the build will fail before Vite bundles.
- No lint/test scripts configured; type-checking is the only verification step.
- `.vscode/` is gitignored except `extensions.json`; `.idea/` and `node_modules/` are ignored.
