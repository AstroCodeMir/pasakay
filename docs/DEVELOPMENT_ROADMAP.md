# Development Roadmap

1. **Phase 1 — Foundation (current):** monorepo, responsive passenger landing page, API health endpoint, environment and Sequelize setup, architecture documentation, and verification scripts.
2. **Phase 2 — Authentication:** users, roles, password hashing, JWT sessions, operator tenancy, port assignments, and audit middleware.
3. **Phase 3 — Passenger booking:** ports/routes/trips, fares, capacity ledger, transactional reservations, QR e-tickets, booking history, and cancellation rules.
4. **Phase 4 — Operator dashboard:** vessels, schedules, fares, manifests, walk-in sales, trip status, and availability monitoring.
5. **Phase 5 — Port operations:** QR scanning, check-in, boarding confirmation, assigned manifests, and manual verification.
6. **Phase 6 — LGU administration:** advisories, authorized suspensions, holiday schedules, operations monitoring, and reports.
7. **Phase 7 — Payments and notifications:** payment provider integration, webhook reconciliation, email/SMS notifications, and retries.
8. **Phase 8 — Hardening:** security review, load/concurrency tests, observability, deployment automation, backup/restore, and production runbook.

Phase gates require the preceding phase's tests and operational assumptions to be reviewed before advancing.
