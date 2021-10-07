let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate a random number as a target to guess

const generateTarget = () => {
  return (Math.floor(Math.random() * 10));
}

// Compare both guesses from computer and player to decide who is the winner by giving the nearer number to the target

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  let userDif = Math.abs(targetNumber - userGuess);
  let computerDif = Math.abs(targetNumber - computerGuess);
  console.log(userDif, computerDif);
  if (userDif <= computerDif) {
    return true;
  } else {
    return false;
  }
}

// Update score adding credit to computer OR player

const updateScore = winner => winner === "human" ? humanScore++ : computerScore++;

// Update current round of the game

const advanceRound = () => currentRoundNumber++;

// Returns an alert if the player trys to input a number bigger than 9 or smaller than 0

const alert = userGuess => userGuess < 0 || userGuess > 9 ? true : false;