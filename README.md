# portfolio

Personal portfolio, Henry Cabello. A bilingual single-page site styled as a
terminal: boot sequence, sections as shell commands, ⌘K palette. One shared
content layer drives the page and the printable CV.

## Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:4321/>. English is the root, Spanish is `/es/`.
`/en/` forwards to the root, so links shared before the move still resolve.

```bash
npm run build     # static output to dist/
npm run preview   # serve dist/ exactly as Pages will
```

## The design

Fourteen complete directions were built over the same content and this one,
the terminal, won. It argues "I live in this environment": phosphor on black,
a boot stream over the hero, the work listed like a directory. The other
thirteen and the chooser page are in `archive/`, out of the build but still
in git.

## Where the content lives

All of it is in `src/data/`. The page and the CV hardcode no copy, so editing
a case study once updates everything. Every string is bilingual, see
[docs/architecture.md](docs/architecture.md).

## Before publishing

Read [docs/content-constraints.md](docs/content-constraints.md). It records
what this site may not claim, which client names are still gated, and the open
questions for Henry. The flags in `src/data/config.ts` control the gated parts.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds and publishes to GitHub
Pages.

One-time setup: repository **Settings → Pages → Source → GitHub Actions**.

The workflow sets `SITE_BASE=/portfolio` for a project repo, which serves the
site at <https://hacu9.github.io/portfolio/>. Rename the repo to
`hacu9.github.io` and set `SITE_BASE=/` to serve from the root instead.

`hacu9/henry-portafolio` is the previous home of this site. It still serves its
last build at <https://hacu9.github.io/henry-portafolio/> so old links keep
working. It receives no more commits. Archive it once the links are updated.
