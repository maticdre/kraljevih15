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