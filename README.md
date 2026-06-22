# Indian Live Sports Hub

**India's first dedicated basketball streaming channel** — covering district, state, and national tournaments live across India.

🌐 [ilsh.vercel.app](https://ilsh.vercel.app) &nbsp;·&nbsp; 📺 [YouTube](https://www.youtube.com/@indianlivesportshub) &nbsp;·&nbsp; 📸 [Instagram](https://www.instagram.com/indianlivesportshub/)

---

## What it is

ILSH is the official website for Indian Live Sports Hub — a team that travels across India to film and stream basketball tournaments at every level, from grassroots district games to national championships.

The site serves as the central hub for:
- Live coverage status and stream links
- Tournament schedule and itinerary
- Photo gallery of past tournaments
- Latest YouTube highlights
- Contact and partnership inquiries

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React + SSR) |
| Routing | [TanStack Router](https://tanstack.com/router) |
| Data fetching | [TanStack Query](https://tanstack.com/query) |
| Database & Auth | [Supabase](https://supabase.com) (Postgres + Auth) |
| Styling | Custom CSS design system |
| Build | Vite + Nitro |
| Deployment | Vercel (via Nitro Vercel preset) |
| Package manager | Bun |

---

## Project Structure

```
src/
├── routes/
│   ├── index.tsx          # Home page
│   ├── memories.tsx       # Photo gallery
│   ├── schedule.tsx       # Tournament schedule
│   ├── covering.tsx       # Live coverage page
│   ├── contact.tsx        # Contact form
│   ├── auth.tsx           # Admin login
│   └── _authenticated/
│       └── admin.tsx      # Admin panel (role-gated)
├── components/
│   ├── Nav.tsx            # Navigation
│   ├── Ticker.tsx         # Live coverage ticker bar
│   ├── Cards.tsx          # VideoCard, MemoryCard, ScheduleEvent
│   ├── Skeletons.tsx      # Loading skeleton components
│   └── Footer.tsx         # Footer
├── lib/
│   ├── data.ts            # React Query hooks (useVideos, useMemories, etc.)
│   └── assets.ts          # Asset URL resolver
├── styles/
│   └── sports.css         # Full custom design system
└── integrations/
    └── supabase/          # Supabase client + types
```

---

## Running Locally

**Prerequisites:** [Bun](https://bun.sh), a Supabase project

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
# Fill in your Supabase URL and anon key

# Start dev server
bun run dev
```

---

## Environment Variables

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

For Vercel deployment, add all four variables in **Project Settings → Environment Variables**.

---

## Admin Panel

The site has a built-in CMS at `/auth` → `/admin` with four sections:

- **Coverage** — toggle live status, set tournament name, city, venue, YouTube/Instagram links
- **Schedule** — add and manage upcoming tournament events
- **Memories** — upload gallery photos with city and date labels
- **Videos** — add YouTube video IDs to the highlights section

Access is role-gated via Supabase's `user_roles` table. To create an admin account:

1. Add a user in Supabase → Authentication → Users
2. Run in SQL Editor:
   ```sql
   INSERT INTO user_roles (user_id, role)
   SELECT id, 'admin' FROM auth.users WHERE email = 'your@email.com';
   ```

---

## Deployment

The project uses Nitro's Vercel preset and outputs to `.vercel/output/` for the Build Output API.

```bash
bun run build   # outputs to .vercel/output/
```

Vercel picks up the build automatically on every push to `main`.

---

## Database Schema

| Table | Purpose |
|---|---|
| `coverage` | Singleton row (id=1) — current live coverage info |
| `schedule_events` | Tournament schedule with status (upcoming / covering / completed) |
| `memories` | Photo gallery entries with optional image uploads |
| `videos` | YouTube video IDs and metadata |
| `user_roles` | Maps auth users to `admin` or `user` role |
| `contact_messages` | Inbound contact form submissions |

---

© 2026 Indian Live Sports Hub · All rights reserved
