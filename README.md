# Pasakay

Pasakay is a centralized provincial ferry reservation and port-management platform for Quezon Province. Phase 1 establishes a Next.js passenger-facing web foundation and an Express/Sequelize API foundation.

## Quick start

```bash
npm install
Copy-Item .env.example .env
npm run dev
```

The web app runs at `http://localhost:3000`; the API health check is `http://localhost:4000/api/health`. MySQL is optional for the foundation startup, but required by future persistence features.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) and [docs/DEVELOPMENT_ROADMAP.md](docs/DEVELOPMENT_ROADMAP.md).
