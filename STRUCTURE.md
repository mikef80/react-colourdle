app/
├── components/         # Reusable UI components (frontend)
├── routes/            # Remix routes (frontend & backend)
│   ├── _index.tsx     # Homepage
│   ├── about.tsx      # About page
│   ├── contact.tsx    # Contact form
│   ├── projects.tsx   # Projects page
│   ├── api/           # API routes (backend)
│   │   ├── github.ts  # Example API route fetching data
│   ├── dashboard.tsx  # Protected route with loader
├── models/            # Database models (backend)
│   ├── user.server.ts # User model queries (Prisma, etc.)
│   ├── project.server.ts # Project model queries
├── utils/             # Utility functions (shared frontend/backend)
│   ├── auth.ts        # Authentication logic (backend)
│   ├── session.ts     # Session management (backend)
│   ├── helpers.ts     # Helper functions (shared)
├── styles/            # Global & component-specific styles
├── entry.client.tsx   # Client entry point (frontend)
├── entry.server.tsx   # Server entry point (backend)
├── root.tsx           # Root layout (frontend)
└── error.tsx          # Error boundary (frontend)


✅ Keep frontend logic in .tsx (UI & component state).
✅ Keep backend logic in .server.ts (DB queries, authentication).
✅ Use API routes (routes/api/) for external data fetching.
✅ Use models/ for database logic.
✅ Use utils/ for shared functions like auth & sessions.
✅ Use styles/ for global & component styles.

