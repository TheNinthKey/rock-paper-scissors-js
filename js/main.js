function playGame() {
    let choice = confirm("Would you like to play rock-paper-scissors?")
    if (choice) {
        let playerChoice = prompt("Choose: rock, paper, scissors");
        
        if (playerChoice) {
            let playerOne = playerChoice.trim().toLowerCase();
            if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

                let computerChoice = Math.floor(Math.random() * 3 + 1); // not from 0 to 2, but from 0 to 3!
                let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
                
                let result =
                    playerOne === computer ? "Tie game!":
                    playerOne === "rock" && computer === "paper" ? 
                    `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`:
                    playerOne === "paper" && computer === "scissors" ? 
                    `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`:
                    playerOne === "scissors" && computer === "rock" ? 
                    `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`:
                    `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
                console.log(result);
                let playAgain = confirm("Play Again?");
                playAgain ? location.reload() : console.log("Sure! See ya next time :)")

            } else {
                console.log("Please, choose: rock, paper, scissors");
            }
        } else {
            console.log("I guess you changed your mind. Maybe next time.")
        }
    } else {
        console.log("Next time!")
    }
}

playGame()



/* function computerPlay() {
    list = ["Rock", "Paper", "Scissors"];
    randomString = String(Math.floor(Math.random()*list.length));
    return list[randomString];
} */

/* let rockPaperScissors = function game(playerSelection="Rock", computerSelection="Rock") {

    if (playerSelection === computerSelection) {
        return "It's a draw!"

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return console.log("Computer wins! Paper beats Rock");

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return console.log("Computer wins! Scissors beat Paper");

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return console.log("Computer wins! Rock beats Scissors");

    } else {
        return console.log("You win!");
    }   
} */








