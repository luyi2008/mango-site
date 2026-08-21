# mango-site

Marketing site for 北京芒果云端科技有限公司. Right now it is a single “coming soon” page. There is no backend: Vite builds static files, and Nginx serves them.

For a beginner walkthrough of architecture and a good first change, see [CODEBASE_TOUR.md](./CODEBASE_TOUR.md).

## Stack

- React 19 + React Router
- Vite (`npm run dev` / `npm run build`)
- Docker + Nginx for production
- GitHub Actions: push `main` → Docker Hub → SSH deploy to ECS

## Local development

Requires Node.js 20+ (same major version as the Dockerfile).

```bash
npm install
npm run dev
```

The app is usually at [http://localhost:5173](http://localhost:5173).

| Script | What it does |
|---|---|
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Production bundle in `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | ESLint |

## Project layout

| Path | Role |
|---|---|
| `index.html` | HTML shell; mounts `#root` |
| `src/main.jsx` | React bootstrap and routes |
| `src/pages/ComingSoon.jsx` | Home / coming-soon page |
| `src/pages/ComingSoon.css` | Page styles |
| `src/index.css` | Global reset |
| `Dockerfile` | Multi-stage build: Node → Nginx |
| `nginx.conf` | SPA fallback so client routes do not 404 |
| `.github/workflows/deploy.yml` | Build, push, and deploy |

Add new pages in `src/pages/` and register them in `src/main.jsx`.

## Docker

```bash
docker build -t mango-site .
docker run --rm -p 8080:80 mango-site
```

Then open [http://localhost:8080](http://localhost:8080).

`nginx.conf` uses `try_files $uri $uri/ /index.html` so React Router paths still work on refresh.

## Deploy

Push to `main` runs [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). It builds and pushes `mango-site:latest` to Docker Hub, then SSHs to the server and restarts the `mango-site` container on port 80.

Required GitHub secrets:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `ECS_HOST`
- `ECS_USER`
- `ECS_SSH_KEY`
