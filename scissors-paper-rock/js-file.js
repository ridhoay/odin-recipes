
const choices = ["scissors", "paper", "rock"];

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer choice:", computerChoice);
    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice !== computerChoice) {
        if (
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "rock" && computerChoice === "scissors")
        ) {
            humanScore++;
        } else {
            computerScore++;
        }
    }
    updatePlayedHand(humanChoice, computerChoice);
}

function playGame() {
    if (humanScore === 5 || computerScore === 5) {
        return {
            finished: true,
            winner: humanScore === 5 ? "You" : "Computer"
        };
    }
    return { finished: false };
}

// --- UI Helpers ---
function updatePlayedHand(humanChoice, computerChoice) {
    const container = document.querySelector(".container");
    let playedHand = document.querySelector("#playedHand");

    if (!playedHand) {
        playedHand = document.createElement("p");
        playedHand.id = "playedHand";
        container.appendChild(playedHand);
    }
    playedHand.textContent = `You played: ${humanChoice} | Computer played: ${computerChoice}`;
}

function updateScore(win) {
    const container = document.querySelector(".container");
    let score = document.querySelector("#score");

    if (!score) {
        score = document.createElement("p");
        score.id = "score";
        container.appendChild(score);
    }
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    let winMessage = document.querySelector("#winMessage");
    if (win.finished) {
        if (!winMessage) {
            winMessage = document.createElement("p");
            winMessage.id = "winMessage";
            container.appendChild(winMessage);
        }
        winMessage.textContent = `${win.winner} won! 🎉`;

        // Reset scores for new game
        humanScore = 0;
        computerScore = 0;
    } else if (winMessage) {
        container.removeChild(winMessage);
    }
}

// --- Game Start ---
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#buttons button").forEach(button => {
        button.addEventListener("click", e => {
            const humanChoice = e.target.id;
            const computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);
            const win = playGame();
            updateScore(win);

            console.log("Human:", humanScore, "| Computer:", computerScore);
        });
    });
});

