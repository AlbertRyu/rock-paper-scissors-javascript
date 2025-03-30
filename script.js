console.log("Welcome, Player!")

function getComputerChoice() {
    let random_number = Math.random()
    if (random_number < 0.33) {
        return "Rock"
    } else if (random_number > 0.67) {
        return "Scissors"
    } else {
        return "Paper"
    }
}

function takeCareFormate(choice){
    // This function takes care about the format.
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase()
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    

    function lose(){
        resultText = `You lose! ${computerChoice} beats ${humanChoice}.`
        computerScore++
    }

    function win(){
        resultText = `You win! ${humanChoice} beats ${computerChoice}.`
        humanScore++
    }

    function tie(){
        resultText = "It's a tie. No one scores."
    }

    if (humanChoice == 'Rock') {
        if (computerChoice == 'Paper') {lose()} 
        else if (computerChoice == 'Scissors') {win()} 
        else {tie()}
    } else if (humanChoice == 'Paper') {
        if (computerChoice == 'Scissors') {lose()} 
        else if (computerChoice == 'Rock') {win()} 
        else {tie()} 
    } else if (humanChoice == 'Scissors') {
        if (computerChoice == 'Rock') {lose()} 
        else if (computerChoice == 'Paper') {win()} 
        else {tie()}
    } else {resultText = 'Invalid Input, Invalid game.'}

    const matchResult = document.querySelector('.matchResult')
    const currentScore = document.querySelector('.currentScore')
    scoreText = `
        After this match, the score is <br>
        Computer: ${computerScore}
        Player:   ${humanScore}`

    matchResult.textContent = resultText
    currentScore.innerHTML = scoreText

}

let humanChoice, computerChoice, highestScore
highestScore = 0
const buttons = document.querySelectorAll('.choice')
buttons.forEach(
    button => button.addEventListener('click', (e) => humanMadeAChoice(e.target.textContent))
)
function humanMadeAChoice(humanChoice){
    computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    highestScore = Math.max(humanScore,computerScore)
    let status;
    if (humanScore == 5) {
        document.querySelector('.finalMessage').innerHTML = `You win the whole game!`
    }else if (computerScore == 5) {
        document.querySelector('.finalMessage').innerHTML = `You lose the whole game!`
    }
}

//playGame()
