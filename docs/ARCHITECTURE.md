# Pasakay Architecture

## Foundation shape

Pasakay is a workspace monorepo with two deployable applications:

- `apps/web`: Next.js + React + TypeScript passenger web experience. It owns presentation, responsive layout, and browser interactions.
- `apps/api`: Express REST API + Sequelize/MySQL integration. It owns validation, authentication, authorization, capacity transactions, and auditability.

The API is the system of record. The web app must never be trusted for business-rule enforcement. Future operator, port, and LGU portals should consume the same API with role-aware authorization.

## API conventions

Routes are grouped under `/api`. Responses use a stable shape: successful resources directly, and errors as `{ error: { code, message, details? } }`. Health is exposed at `GET /api/health`. Request validation will use Zod at route boundaries; centralized error middleware will map validation, authorization, and database errors.

## Data and booking integrity

Sequelize models will map operators, ports, routes, vessels, trips, fares, bookings, passengers, vehicles, check-ins, and audit events. Passenger capacity and vehicle-deck capacity are separate allocations. Booking creation/cancellation will run in database transactions with row locking or an atomic capacity ledger to prevent overbooking. Booking and payment statuses remain independent.

## Security and operations

JWT authentication will be introduced with server-side RBAC and operator/assignment scoping. Passwords will use a vetted password hash. Secrets come only from environment configuration. Helmet, CORS, bounded JSON bodies, structured logs, and audit events are the baseline. QR payloads will contain opaque booking references, never passenger PII.

## Environment

`.env.example` documents local configuration. `.env` is ignored. Database authentication is attempted by the API at startup, but a missing local MySQL server currently produces a warning rather than preventing the health endpoint from running.

## Testing

API unit/integration tests use Vitest and Supertest. Frontend TypeScript, lint, and production build checks run from the workspace scripts. Later phases should add database-backed transaction tests and browser-level booking flows.
