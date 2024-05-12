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

