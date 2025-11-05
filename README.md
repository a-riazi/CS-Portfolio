# CS-Portfolio (Astro)

Static portfolio built with Astro, configured for GitHub Pages.

## Quick start
- Install deps
  - `npm install`
- Dev server
  - `npm run dev`
- Build
  - `npm run build`
- Preview
  - `npm run preview`

## GitHub Pages deployment
Already configured via GitHub Actions (`.github/workflows/gh-pages.yml`).

1. Ensure `astro.config.mjs` has:
   - `site: "https://a-riazi.github.io/CS-Portfolio/"`
   - `base: "/CS-Portfolio/"`
   - `output: "static"`
2. Push to `main`.
3. In GitHub → Settings → Pages:
   - Build and deployment: GitHub Actions.
4. Check the Actions tab for the deploy run.

Your site will be available at:
`https://a-riazi.github.io/CS-Portfolio/`

## Contact form (Formspree)
GitHub Pages is static; use Formspree to handle submissions.

- In `src/pages/contact.astro`, set the form action to your Formspree endpoint:
  ```html
  <form action="https://formspree.io/f/xxxxxxxx" method="POST">
  ```
- In Formspree, configure allowed domains and email notifications.

The form uses `fetch` with `Accept: application/json` to prevent redirects and show a success message inline.

## Notes
- This repo previously used a Node server (Nodemailer). That was removed to support GitHub Pages.
- If you need a server email endpoint, deploy to Vercel/Render/Railway and restore the API route.
