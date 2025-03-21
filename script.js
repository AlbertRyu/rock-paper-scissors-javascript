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

function getHumanChoice(){
    let choice = prompt("What is your choice?")
    choice = takeCareFormate(choice)
    return choice
}

function takeCareFormate(choice){
    // This function takes care about the format.
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase()
}



function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice){

        function lose(){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }

        function win(){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++
        }

        function tie(){
            console.log("It's a tie. No one scores.")
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
        } else {console.log('Invalid Input, Invalid game.')}

        console.log(`After this match, the score is
            Computer: ${computerScore}
            Player:   ${humanScore}`)
    }

    let humanChoice, computerChoice, highestScore
    highestScore = 0
    while (highestScore < 5){
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        highestScore = Math.max(humanScore,computerScore)
    }

    if (humanScore == 5) {console.log("The Player wins!")} 
    else { console.log("The Computer wins!")}

}

playGame()
