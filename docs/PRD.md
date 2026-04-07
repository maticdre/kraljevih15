# Product requirements: Kraljevih15 MVP

## Technical Objective

Transition Kraljevih15 from a manual spreadsheet to a state-synchronized web application. The system must enforce a complex turn-based engine and real-time state updates between two players.

## Target MVP Features

### Core engine logic

- **Grid:** Fixed 11 x 7 coordinate system
- **Entities:** Every troop on the board is an object with defined properties (HP, Position, Owner, Troop type and Action Coins)
- **Visibility:** System must calculate line of sight; if a path between two coordinates is clear/contested based on the troops occupying the intervening tiles

### Session & State requirements

- **Multiplayer synchronization:** The system must support two-player sessions where actions performed by one user are reflected on the opponent's screen with minimal latency
- **Game room persistence:** Each match must exist as a unique session tied to two specific user IDs. The state of this session must persist so that players can resume if a page refresh occurs.

### Game phase constraints

- **Draft:** The system must enforce a starting draft following the "Center-Out" placement logic according to the {rules}
- **Win/Loss Condition:** After win/loss condition are met based on the {rules}, the session must terminate and declare a winner

## MVP User Flow

1. **Auth:** User authenticates
2. **Matchmaking:** User creates/joins a room via link/code
3. **Draft:** Players alternate picking 6 troops; the system places them in the correct edge-row columns
4. **Game Loop:** Player select troop -> Selects actions (based on AC and range) -> Ends turn

## Development Policies

- **No-Bloat:** Avoid over-engineering. Write the simpliest code that solves the problem. Avoid external libraries if the logic can be implemented simply and efficiently in plain TypeScript

- **Minimal (Functional) Design:** Focus on logic first. Unless a task is specifically for "Front-End Polishing," use the bare minimum Tailwind utility classes to make the UI functional

- **Small Steps:** One feature per commit. Do not refactor unrelated code during a feature task and prioritize small, single purpose functions over long, complex programs

- **Judicious Commenting:** Add comments only where they are needed, high-density comments should be reserved for complex game logic so their importance isn't diluted

- **Living documentation:** Update ADR.md, PRD.md or TDD.md immediately after any major architectural shift. Add test for critical game rules to prevent regressions

- **Free Tier Conservation:** Design system to be conservative on resoursec to stay within Vercel and Supabase free tier limits without sacrificing the user experience