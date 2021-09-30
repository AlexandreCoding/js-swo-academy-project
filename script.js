let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return (Math.floor(Math.random() * 10));
}

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

const updateScore = winner => winner === "human" ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;

const alert = userGuess => userGuess < 0 || userGuess > 9 ? true : false;

console.log(generateTarget());
console.log(compareGuesses(9, 4, generateTarget()));