# Technical Design Document (TDD)

## Development Policies

- **No-Bloat:** Avoid over-engineering. Write the simpliest code that solves the problem. Avoid external libraries if the logic can be implemented simply and efficiently in plain TypeScript

- **Minimal (Functional) Design:** Focus on logic first. Unless a task is specifically for "Front-End Polishing," use the bare minimum Tailwind utility classes to make the UI functional

- **Small Steps:** One feature per commit. Do not refactor unrelated code during a feature task and prioritize small, single purpose functions over long, complex programs

- **Judicious Commenting:** Add comments only where they are needed, high-density comments should be reserved for complex game logic so their importance isn't diluted

- **Living documentation:** Update ADR.md, PRD.md or TDD.md immediately after any major architectural shift. Write tests for utils and critical game rules to prevent regressions

- **Free Tier Conservation:** Design system to be conservative on resoursec to stay within Vercel and Supabase free tier limits without sacrificing the user experience

## File Structure

## Implementation Details

## Infrstructure

## Testing & Deployment Plan

## Key Logic

## API/Server Actions