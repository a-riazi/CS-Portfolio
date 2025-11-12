# Ahmad Riazi — CS Portfolio

Live demo: https://a-riazi.github.io/CS-Portfolio/

![Preview](public/img/preview-page.webp)

## About
Computer Science professional with hands-on experience in full‑stack development, UI/UX design, and applied AI. Skilled in Python, Java, JavaScript, and C++, with a strong foundation in algorithms, data structures, and cybersecurity. I enjoy building scalable systems, leading technical teams, and translating ideas into functional, user‑focused software.

## Skills
- HTML, CSS, JavaScript, TypeScript
- React, Next.js, Astro, Vite
- Tailwind CSS, Material UI, Styled Components, Radix UI, shadcn/ui
- State/data: Redux, React Query, Zustand
- Backend: Node.js, MongoDB
- Tooling: Git, GitHub, Stripe

## Featured projects

> Click a thumbnail to open the live demo.

|  |  |  |
|---|---|---|
| [![Ecommerce Stripe](public/img/ecommerce-stripe-2.webp)](https://ecommerce-stripe-763m.vercel.app/) <br/>Ecommerce Stripe | [![NexAnime](public/img/nexanime.webp)](https://nexanime.vercel.app) <br/>NexAnime | [![Cyberpunk](public/img/cyberpunk.webp)](https://preeminent-liger-266356.netlify.app/) <br/>Cyberpunk |
| [![Store Games](public/img/store-games.webp)](https://store-games-site.netlify.app/) <br/>Store Games | [![Movie TV](public/img/movie.webp)](https://movietvsite.netlify.app/) <br/>Movie TV | [![Tasks Manager](public/img/tasks-manager.webp)](https://task-manager-ecru-chi.vercel.app/dashboard) <br/>Tasks Manager |

More in the site’s Projects section.

## Education
- Computer Science Bachelor's + Master's — University of California, Riverside (09/2023–07/2027)
- UI/UX Professional Designer — Google's Professional UI/UX course (02/2023–09/2023)

## Contact
- Website: https://a-riazi.github.io/CS-Portfolio/
- Contact page: https://a-riazi.github.io/CS-Portfolio/contact/
- GitHub: https://github.com/a-riazi
- LinkedIn: https://www.linkedin.com/in/ahmad-riazi/

---

## Run locally
- Install dependencies
  - `npm install`
- Start dev server
  - `npm run dev`
- Build
  - `npm run build`
- Preview production build
  - `npm run preview`

## Deployment (GitHub Pages)
This project is configured for GitHub Pages via Actions (`.github/workflows/gh-pages.yml`).

1. Ensure `astro.config.mjs`:
   - `site: "https://a-riazi.github.io/CS-Portfolio/"`
   - `base: "/CS-Portfolio/"`
   - `output: "static"`
2. Push to `main` to trigger the workflow.
3. In GitHub → Settings → Pages, set “Build and deployment” to GitHub Actions.

Notes:
- A `.nojekyll` file is added at deploy time to avoid Jekyll parsing.
- Public assets and links in code use `import.meta.env.BASE_URL` so they resolve under the repo subpath.

## Contact form (Formspree)
The site is static; the contact form posts to Formspree.

- In `src/pages/contact.astro`, set your Formspree endpoint:
  ```html
  <form action="https://formspree.io/f/xxxxxxxx" method="POST">
  ```
- The form uses `fetch` with `Accept: application/json` to show a success message without redirecting.

## Folder structure (high level)
```
public/
  img/                 # Images used across the site and README
src/
  components/          # UI components (home, skills, studies, projects)
  pages/               # index.astro, contact.astro
  const/const.js       # Skills, studies, and project data
astro.config.mjs       # Base/site config for GitHub Pages
.github/workflows/gh-pages.yml  # Deployment pipeline
```

## License
MIT
