# Debugging Analysis

## Breakpoint 1 — Click updates state

- addAnswerButton currentState = nextState;
- Before: currentState = "beginning", nextState = "ClaireStep1"
- After: currentState = "ClaireStep1"
- Clicked the button then update the currentState then render the question

## Breakpoint 2 — Clear old buttons

- In renderQuestion() before buttonAnswer.innerHTML = "".
- Before (debug-2-before.png):Paused here; old buttons still in #option-buttons.
- After (debug-2-after.png) Elements panel shows #option-buttons is empty
- Proves we remove old choices first, then add new ones. No duplicates

## Breakpoint 3 — Condition check (ClaireStep2)

- In renderQuestion() at if (currentState === "ClaireStep2")
- Condition: currentState === "ClaireStep2.
- Before: Paused in this branch; currentState is "ClaireStep2" and #option-buttons is empty.
- After: Elements shows two buttons under #option-buttons.
- Proves we entered the correct  condition and rendered exactly two choices.

