let humanScore = null;
let computerScore = null;

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3 + 1);
  if (rand === 1) {
    console.log("rock");
    return "rock";
  } else if (rand === 2) {
    console.log("paper");
    return "paper";
  } else {
    console.log("scissors");
    return "scissors";
  }
}

function humanChoiceTypeCheck(userInp) {
  if (userInp === "rock" || userInp === "paper" || userInp === "scissors") {
    return true;
  } else {
    console.log("please make a valid choice!");
    return false;
  }
}

function getHumanChoice() {
  let isValid = false;
  let userInp = null;
  while (!isValid) {
    userInp = prompt("Please make your choice: ").toLowerCase();
    isValid = humanChoiceTypeCheck(userInp);
  }
  console.log("Your choice is", userInp);
}

getComputerChoice();
getHumanChoice();
