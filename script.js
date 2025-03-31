console.log("Welcome, Player!")

let computerScore, humanScore, humanChoice, computerChoice
const buttons = document.querySelectorAll('.choice')

// Add listener to buttons, waiting for player's choice.
function startGame(){
    console.log('Game Start!')
    computerScore = 0
    humanScore = 0
    buttons.forEach(
        button => button.addEventListener('click', humanMadeAChoice)
    )
}



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
        Computer: ${computerScore} <br>
        Player:   ${humanScore}`

    matchResult.textContent = resultText
    currentScore.innerHTML = scoreText

}


// When Human player made a choice, play a round.
function humanMadeAChoice(event){
    computerChoice = getComputerChoice()
    humanChoice = event.target.textContent
    playRound(humanChoice, computerChoice)
    if (humanScore == 5) {
        document.querySelector('.finalMessage').innerHTML = `Game is over. You win!`
        endGame()
    }else if (computerScore == 5) {
        document.querySelector('.finalMessage').innerHTML = `Game is over. You lose!`
        endGame()
    }
}


// Add the restart button into the dom and remove Listener from choice buttons.
function endGame(){
    buttons.forEach(
        button => button.removeEventListener('click',humanMadeAChoice)
    )
    let restartButton = document.createElement('button')
    restartButton.classList = 'restartButton'
    restartButton.textContent = 'Play Again?'
    restartButton.addEventListener('click', restartGame)

    let resultSection = document.querySelector('.resultSection')
    resultSection.appendChild(restartButton)
    
}

//start the Game, restore the original webpage 
function restartGame(){
    location.reload()
}

startGame()