const humanScore = 0
const computerScore = 0

const getComputerChoice = () => {
    const randomComputer = Math.floor(Math.random() * 3)
    if (randomComputer === 0) {
        return "Rock"
    } else if (randomComputer === 1) {
        return "Paper"
    } else {
        return "Scissor"
    }
}

const getHumanChoice = () => {
    const randomHuman = Math.floor(Math.random() * 3)
    if (randomHuman === 0) {
        return "Rock"
    } else if (randomHuman === 1) {
        return "Paper"
    } else {
        return "Scissor"
    }
};

const playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return "Draw"
    } else if(computerChoice === "Rock" && humanChoice === "Paper") {
        humanScore++
        return "Human Wins"
    }
};

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)