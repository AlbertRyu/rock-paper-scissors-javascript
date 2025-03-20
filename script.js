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

console.log(getComputerChoice())