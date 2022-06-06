function computerPlay() {
    list = ["Rock", "Paper", "Scissors"];
    randomString = String(Math.floor(Math.random()*list.length));
    return list[randomString];
}

function choice() {
    let parameter = prompt("Choose: Rock, Paper, Scissors", "");
    return parameter;
}

console.log(computerPlay());


function game(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!"

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Computer wins!";

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Computer wins!";

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Computer wins";

    } else {
        return "You win!";
    }   
}

console.log(game(choice(), computerPlay()));





