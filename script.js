console.log("hello world!")

function getComputerChoice() {
    let random_number = Math.random()
    console.log(random_number)
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
    return choice
}

console.log(getComputerChoice())
humen_choice = getHumanChoice()
console.log(humen_choice)
