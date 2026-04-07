# Architecture Decisions (ADR)

## Current Stack

- **Framework:** Next.js (App router)
- **Deployment:** Vercel
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase

## Decision Log

### 1. Project initialization & core framework

- **Context:** Need standard, modern foundation that is easy to deploy and maintain
- **Decision:** Use Next.js (App Router) with TypeScript and Tailwind CSS, hosted on Vercel
- **Rationale:** 
  - Standardization: Next.js is the industry standard, making it easy to find solutions to bug and documentation
  - Low friction: Vercel is the easiest way to get Next.js site live with good free tier
  - Safety & speed: TypeScript catches bugs early; Tailwind CSS allows for rapid styling without leaving HTML
- **Consequences:**
  - Need to use the specific "App router" rules (client vs server components)
  - Must stay within Vercel's free tier
