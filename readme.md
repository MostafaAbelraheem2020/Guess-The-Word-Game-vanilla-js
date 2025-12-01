# Guess The Word Game

A simple web-based word guessing game where players try to guess a 6-letter word within 6 attempts (Trays), built using HTML, CSS, and JavaScript.

## Screenshot

![Guess The Word Game Interface](/imgs/Guess-The-Word-Game-Screenshot.png)

## Game Rules

- The player has a maximum of 6 attempts to guess the secret word.
- Each attempt is a row of 6 input fields (Tray 1 → Tray 6).
- After entering the word in the current row and clicking the Check button, the player receives color-coded feedback for each letter:
  - **Letter Is Correct And In Place** (Orange): The letter is correct and in the right position.
  - **Letter Is Correct But In Wrong Place** (Yellow): The letter exists in the word but in a different position.
  - **Letter Is Wrong And Wrong Place** (Red): The letter does not exist in the word.

## Features

- Simple and intuitive interface using text input fields for each letter.
- Support for up to 6 attempts to guess the word.
- Visual and textual feedback showing the status of each letter after every attempt.
- Great for word training exercises or fun mental challenges.

## How to Run Locally

1. Ensure you have a modern browser installed (Chrome, Firefox, Edge, Safari).
2. Place all project files (such as `index.html`, CSS, and JavaScript files) in the same folder.
3. Open `index.html` directly in your browser:
   - Either drag and drop the file into your browser.
   - Or use Live Server in VS Code with a URL like:
     ```
     http://127.0.0.1:5500/index.html
     ```

## Project Structure (Suggested)

Guess-The-Word-Game/
├── index.html # Main game page with UI elements (Trays, inputs, buttons)
├── style.css # Styling and colors for different letter states
├── script.js # Game logic (word selection, validation, feedback)

## Technologies Used

- **HTML5**: Page structure and game elements (input fields for each Tray).
- **CSS3**: UI styling and color-coded feedback for different letter states.
- **JavaScript**: Game logic, input validation, and interactive features.

## How to Play

1. Start typing letters in the first Tray (6 letters total).
2. Click the **Check** button to submit your guess.
3. Receive feedback on each letter with color indicators.
4. Continue with the next Tray based on the feedback.
5. Win by guessing the word before running out of attempts, or lose if all 6 attempts are used.

## Optional Features

- **Hint Button**: Click "Hint" to receive a clue about the word.
- **New Game**: Reset the game and start with a new secret word.

## Author

Designed and developed by **M.M.Ab**

---

## License

This project is open-source and available for educational and personal use.
