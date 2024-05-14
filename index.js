const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
let compScore = 0;
let humanScore = 0;

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
function endGame(winner) {
  const playAgain = confirm(
    `${
      winner === "human" ? "HUMAN" : "COMPUTER"
    } wins the game. Wanna play again?`
  );
  if (playAgain) {
    resetGame();
  } else {
    disableBtns();
    para3.textContent = "";
    para2.textContent = "";
    para1.textContent = "";
  }
}
function disableBtns() {
  btns.forEach((btn) => (btn.disabled = true));
}

function resetGame() {
  humanScore = 0;
  compScore = 0;
  para3.textContent = "";
  para2.textContent = "";
  para1.textContent = "";
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let humanSelection = e.target.innerText.toLowerCase();
    console.log("The Human Choice is", humanSelection);
    let compSelection = getComputerChoice();
    para1.textContent = `Human Choice is ${humanSelection}`;
    para2.textContent = `Computer Choice is ${compSelection}`;

    let playGame = playRound(humanSelection, compSelection);
    if (playGame === "win") {
      humanScore += 1;
      para3.textContent = `You win ${humanScore} - ${compScore}`;
    } else if (playGame === "lose") {
      compScore += 1;
      para3.textContent = `You lose ${humanScore} - ${compScore}`;
    } else {
      para3.textContent = "It's a draw";
    }

    if (humanScore === 5) {
      endGame("human");
    } else if (compScore === 5) {
      endGame("computer");
    }

    result.appendChild(para1);
    result.appendChild(para2);
    result.appendChild(para3);
  });
});
