# Beginner-friendly tour of mango-site

**mango-site** is a small React marketing site for 北京芒果云端科技有限公司. Today it is a single “coming soon” page, already wired for more routes, Docker, and GitHub Actions deploy.

There is no backend in this repo. Vite builds static files; Nginx serves them.

## Architecture

Three layers:

1. **Browser UI** — React 19 + React Router in `src/`
2. **Dev/build** — Vite (`vite.config.js`, `package.json`)
3. **Ship** — multi-stage `Dockerfile` + `nginx.conf`, then `.github/workflows/deploy.yml`

```
Browser
  → index.html (#root)
    → src/main.jsx (Router)
      → src/pages/ComingSoon.jsx
Build: vite build → dist/
Run:  Nginx serves dist/, SPA fallback to index.html
CI:   push main → Docker Hub → SSH to ECS, docker run :80
```

The real app lives in `src/` and the deploy files. See `README.md` for a shorter project overview.

## Main flows

### 1. Page load (the only user flow today)

`index.html` mounts React into `#root` and loads `src/main.jsx`.

```jsx
// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        {/* 以后加页面：<Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
```

`/` renders `ComingSoon`: header (company name), animated orbit, “网站建设中 / COMING SOON”, footer. Layout and glow/grid effects are in `src/pages/ComingSoon.css`. Global reset is in `src/index.css`.

**Gotcha:** `src/comingsoon.css` is leftover. Nothing imports it. The page uses `src/pages/ComingSoon.css`. CSS mentions Inter and Space Grotesk, but `index.html` does not load those fonts yet.

### 2. Local development

Vite serves the app with hot reload (`npm run dev`). `vite.config.js` only enables `@vitejs/plugin-react`.

### 3. Production

`Dockerfile` installs deps, runs `npm run build`, copies `dist/` into Nginx. `nginx.conf` uses `try_files ... /index.html` so React Router paths like `/about` do not 404 on refresh.

Push to `main` runs `.github/workflows/deploy.yml`: build/push `mango-site:latest` to Docker Hub, SSH to the server, replace the `mango-site` container on port 80.

## How to run

From the project root (`node_modules` is already present):

```bash
npm run dev      # local site, usually http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve dist/ locally
npm run lint     # ESLint (eslint.config.js)
```

Docker (optional):

```bash
docker build -t mango-site .
docker run --rm -p 8080:80 mango-site
```

Then open `http://localhost:8080`.

Deploy needs GitHub secrets: `DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`, `ECS_HOST`, `ECS_USER`, `ECS_SSH_KEY`.

## Files that matter

| File | Why |
|---|---|
| `index.html` | HTML shell, title, script entry |
| `src/main.jsx` | App bootstrap + all routes |
| `src/pages/ComingSoon.jsx` | The live page copy/layout |
| `src/pages/ComingSoon.css` | Visual design |
| `src/index.css` | Global reset |
| `package.json` | Scripts and deps |
| `vite.config.js` | Dev/build tool |
| `Dockerfile` + `nginx.conf` | How it runs in production |
| `.github/workflows/deploy.yml` | CI/CD |
| `src/comingsoon.css` | Unused duplicate — safe to delete |

## Best first change

**Add an About page and a link from the coming-soon header.** The router is already set up; `main.jsx` even comments the exact next step.

Do this:

1. Create `src/pages/About.jsx` (reuse `.cs-page` styles or a small `About.css`).
2. Register `<Route path="/about" element={<About />} />` in `src/main.jsx`.
3. In `ComingSoon.jsx`, wrap the logo or add a nav link with React Router’s `<Link to="/about">`.

That teaches the real architecture (route → page component → CSS) without touching Docker. After that, load the fonts in `index.html`, or delete unused `src/comingsoon.css`.
