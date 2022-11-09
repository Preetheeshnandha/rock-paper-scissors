
let playerSelection;
let computerSelection;
let playerCount;
let computerCount;
let playerScore = 0;
let computerScore = 0;
let gameover;

//console.log(game(playerSelection));

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * 3);
    return choice[i];
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        playerCount = false;
        computerCount = false;
        return "This round is tie";
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        playerCount = true;
        computerCount = false;
        return "you win, " + playerSelection + " beats " + computerSelection;
    } else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper") {
        computerCount = true;
        playerCount = false;
        return "you lose, " + computerSelection + " beats " + playerSelection;
    }


    
}


let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", getplayerchoice)
});

function getplayerchoice(e){
    playerSelection = e.target.value;
    game(playerSelection);
}


function game(playerSelection) {

    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

   
    if (playerCount) {
        playerScore +=1;
    } else if (computerCount) {
        computerScore +=1;
    }

    checkWin();
    if(gameover){
        checkGameover();
    }

    console.log(playerScore);
    //player score at one round
    let playWin = document.querySelector(".playerScore");
    playWin.textContent = playerScore;

    console.log(computerScore);
    //computer score at one round
    let compWin = document.querySelector(".computerScore");
    compWin.textContent = computerScore;


    console.log("computer " + computerSelection);
    //computer selection display
    let compSelect = document.querySelector(".compSelect");
    compSelect.textContent = computerSelection;

    console.log("player " + playerSelection);
    //Player selection display 
    let user = document.querySelector(".userSelect");
    user.textContent = playerSelection;

    console.log(playRound(playerSelection, computerSelection));
    //one round result
    let result = document.querySelector(".result");
    result.textContent = playRound(playerSelection, computerSelection);

    
    //first 5 point player is winner
    let finalWin = document.querySelector(".finalWin");
    finalWin.textContent = checkWin();

    

}



function checkWin(){

    if(playerScore==5 || computerScore ==5){

        gameover = true;

        if (playerScore == computerScore) {
            return "Both are tie in this match";
        } else if (playerScore > computerScore) {
            return "User  win" ;
        } else if (playerScore < computerScore) {
            return "Computer  win " ;
        }
    }
    
}

function checkGameover(){
        buttons.forEach(button => {
            button.removeEventListener("click", getplayerchoice)
        });
    }

    