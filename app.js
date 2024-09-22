let playerScore = 0;
let computerScore = 0;

// Function to play the game
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Update the display for player and computer choices
    updateDisplay(playerChoice, computerChoice);

    // Determine the winner
    const result = determineWinner(playerChoice, computerChoice);
    console.log("Result: ", result); // Debugging line
    updateScores(result);

    // Update the game result display
    document.getElementById("gameResult").textContent = result;
}

// Function to update the display
function updateDisplay(playerChoice, computerChoice) {
    const choiceEmojis = {
        'rock': '&#9994;',
        'paper': '&#9995;',
        'scissors': '&#9996;'
    };

    document.getElementById("playerChoice").innerHTML = choiceEmojis[playerChoice];
    document.getElementById("computerChoice").innerHTML = choiceEmojis[computerChoice];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a Draw!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;  // Correctly increment the player's score
        console.log("Player Score Updated: ", playerScore); // Debugging line
        return "Player Wins!";
    } else {
        computerScore++; // Correctly increment the computer's score
        console.log("Computer Score Updated: ", computerScore); // Debugging line
        return "Computer Wins!";
    }
}

// Function to update scores
function updateScores(result) {
    // Update DOM elements, ensuring proper number is displayed
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    console.log("Player Score Display: ", document.getElementById("playerScore").textContent); // Debugging line
    console.log("Computer Score Display: ", document.getElementById("computerScore").textContent); // Debugging line
}
