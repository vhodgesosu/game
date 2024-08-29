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

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("Human Chose: ", humanChoice)
        console.log("Computer Chose: ", computerChoice)
        console.log("It is a draw no one wins!!")
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        console.log("Human Chose: ", humanChoice)
        console.log("Computer Chose: ", computerChoice)
        console.log("Human Wins this Round and gains 1 point!!")
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("Human Chose: ", humanChoice)
        console.log("Computer Chose: ", computerChoice)
        console.log("Computer Wins this Round and gains 1 point!!")
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        console.log("Human Chose: ", humanChoice)
        console.log("Computer Chose: ", computerChoice)
        console.log("Computer Wins this Round and gains 1 point!!")
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Human Chose: ", humanChoice)
        console.log("Computer Chose: ", computerChoice)
        console.log("Human Wins this Round and gains 1 point!!")
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        console.log("Human Chose: ", humanChoice)
        console.log("Computer Chose: ", computerChoice)
        console.log("Computer Wins this Round and gains 1 point!!")
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        console.log("Human Chose: ", humanChoice)
        console.log("Computer Chose: ", computerChoice)
        console.log("Human Wins this Round and gains 1 point!!")
    }
}

function playGame()

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)