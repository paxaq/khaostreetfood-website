# Repository Guidelines

## Project Structure & Module Organization
- `app/` App Router entry (`layout.tsx`, `page.tsx`), global CSS in `app/globals.css`.
- `components/` Feature and UI components; shared UI in `components/ui/`.
- `lib/` Utilities (e.g., `lib/utils.ts` exports `cn` for Tailwind class merging).
- `public/` Static assets; `styles/` legacy `globals.css` (prefer `app/globals.css`).
- Config: `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`.

## Build, Test, and Development Commands
- Install deps: `pnpm i` (or `npm i`).
- Dev server: `pnpm dev` → runs Next.js locally on 3000.
- Lint: `pnpm lint` → ESLint via `next lint`.
- Build: `pnpm build` → production build.
- Start: `pnpm start` → serve the production build.

## Coding Style & Naming Conventions
- Language: TypeScript, React 18, Next.js App Router, Tailwind CSS.
- Indentation: 2 spaces; prefer functional components and hooks.
- File naming: kebab-case files in `components/` (e.g., `about-section.tsx`); exports PascalCase (`AboutSection`).
- Routes: folders in `app/` are kebab-case; use `page.tsx`/`layout.tsx` patterns.
- Utilities: camelCase functions in `lib/`.
- Tailwind: prefer utility classes; use `cn(...)` from `lib/utils.ts` to merge classes.
- Client/server: add `"use client"` only when required by browser-only APIs.

## Testing Guidelines
- No test runner configured yet. If adding tests:
  - Unit: React Testing Library + Vitest; name as `*.test.tsx` co-located or in `__tests__/`.
  - E2E: Playwright; keep critical flows (home, nav, forms) covered.
  - Add scripts (`test`, `test:e2e`) and ensure CI runs `pnpm build` + tests.

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`. Example: `feat(app): add reservation CTA`.
- PRs: include summary, linked issues, screenshots for UI, and a note on accessibility/ARIA when relevant.
- Verify `pnpm lint` and `pnpm build` pass; include Vercel preview link.

## Security & Configuration Tips
- Do not commit secrets. Use `.env.local` locally; set env vars in Vercel.
- Avoid exposing secrets in client components; prefer server actions/Route Handlers.
