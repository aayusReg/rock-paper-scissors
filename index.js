const getComputerChoice = () => {
  let rand = Math.floor(Math.random() * 3 + 1);
  if (rand === 1) {
    console.log("The computer choice is rock");
    return "rock";
  } else if (rand === 2) {
    console.log("The computer choice is paper");
    return "paper";
  } else {
    console.log("The computer choice is scissors");
    return "scissors";
  }
};

function humanChoiceTypeCheck(userInp) {
  if (userInp === "rock" || userInp === "paper" || userInp === "scissors") {
    return true;
  } else {
    console.log("please make a valid choice!");
    return false;
  }
}

const getHumanChoice = () => {
  let isValid = false;
  let userInp = null;
  while (!isValid) {
    userInp = prompt("Please make your choice: ").toLowerCase();
    isValid = humanChoiceTypeCheck(userInp);
  }
  console.log("Your choice is", userInp);
  return userInp;
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "lose";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "lose";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "lose";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "win";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "win";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "win";
  } else {
    console.log("It is a draw");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    if (result === "lose") {
      computerScore++;
    } else if (result === "win") {
      humanScore++;
    }
  }
  if (computerScore > humanScore) {
    console.log(`Computer wins ${computerScore}-${humanScore}`);
  } else if (computerScore < humanScore) {
    console.log(`Human wins ${humanScore}-${computerScore}`);
  } else {
    console.log("Its a drawwww!!!");
  }
}

playGame();
