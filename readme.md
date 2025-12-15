# Guess The Word Game

A browser-based guessing game where you try to find a hidden 6-letter word in up to 6 rounds using only vanilla HTML, CSS, and JavaScript. 

*This README was organized with assistance from AI to streamline its structure and formatting.*


## Project screenshots
    ![Main Game layout](imgs/Guess-The-Word-Game-Screenshot-1)
    ![Main Game layout](imgs/Guess-The-Word-Game-Screenshot-2)



 
## Overview

- Six trays (attempts), each with six letter inputs.
- Color feedback after pressing `Check`:
  - Orange: letter is correct and in the right position.
  - Yellow: letter is in the word but in a different position.
  - Red: letter is not in the word.
- A tray-specific `Clear` button appears after typing your first letter to reset that row.
- The game randomly picks a word from the built-in list and shows a related image beside the board; used words (and their images) are removed before the next round.

## Quick Start

1. Open `index.html` in any modern browser (or use a local server such as VS Code Live Server).
2. Type one letter per box in the first tray; focus moves automatically.
3. Press `Check` to evaluate your attempt.
4. If you are correct, the next tray unlocks with a new secret word and image; otherwise, adjust your guess based on the colors.
5. After six successful rounds you see a success message summarizing your score.

## Controls & Feedback

- `Check`: validates the current tray and reveals letter feedback.
- `Clear`: appears inside the active tray after you start typing; clears only that tray.
- Input navigation: arrow keys move between boxes; backspace clears and moves left; double-click clears a single box.
- `Hint` button exists in the UI but is not yet wired to logic.

## Word Pool & Assets

- Default words: `Create`, `Update`, `Delete`, `Mostaf`, `Circle`, `Family`.
- Each word has an associated image in `imgs/` shown during its round. (Note: an image for `Mostaf` is referenced as `imgs/mostaf.jpg` but not included in the repository.)

## Project Structure

- `index.html` — markup for the game layout and controls.
- `css/style.css` — styling, layout, and color indicators for feedback states.
- `css/all.min.css`, `css/normalize.css` — font-awesome and normalization helpers.
- `js/master.js` — game logic (word selection, tray handling, validation, clear button).
- `imgs/` — game images and a provided screenshot.
- `Open_Sans/`, `webfonts/` — bundled fonts used by the UI.

## Deployment

```json
{
  "deployment": {
    "platform": "Vercel",
    "status": "under development",
    "createdBy": "Mostafa Abdellraheem",
    "github": "https://github.com/MostafaAbelraheem2020",
    "linkedin": "https://www.linkedin.com/in/mostafa-mohamed-63b87627a/",
    "whatsapp": "https://wa.me/01010317417"
  }
}
```


## Technology Notes

- No build tools required; everything runs directly in the browser.
- State is kept in memory; reloading the page starts a new game.

## Known Gaps / Future Ideas

- Wire the `Hint` button to reveal a clue or letter.
- Add input validation to prevent submitting empty trays.
- Expand the word list and align images for all entries.
- Improve accessibility (labels, focus outlines, ARIA where needed).
