console.log("HI");

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    let Choice = prompt("Choose Rock Paper or Scissor:", "Rock");
    let val;
    if (Choice.toLowerCase() == "rock") val = 0;
    else if (Choice.toLowerCase() == "paper") val = 1;
    else if (Choice.toLowerCase() == "scissor") val = 2;
    else val = 0;
    return val;
}

let humanscore = 0;
let computerscore = 0;

function playRound(humanscore, computerscore) {
    let result;
    if (humanscore == 2 && computerscore == 1) result = 1;
    else if (humanscore == 1 && computerscore == 0) result = 1;
    else if (humanscore == 0 && computerscore == 2) result = 1;
    else if (humanscore == computerscore) result = 0;
    else result = -1;
    return result;
}

function playGame() {
    let result = 0;
    for (let i = 0; i < 5; i++) {
        humanscore = getHumanChoice();
        computerscore = getComputerChoice();
        console.log(humanscore);
        console.log(computerscore);
        result += playRound(humanscore, computerscore);
    }
    if (result > 0) console.log("WIN");
    else if (result < 0) console.log("LOSE");
    else console.log("TIE");
    return result;
}
