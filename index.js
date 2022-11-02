
let playerSelection;
let computerSelection;
let playerCount;
let computerCount; 

console.log(game());


function getComputerChoice(){
    const choice=["rock","paper","scissors"];
    const i = Math.floor(Math.random()*3);
    return choice[i];
}



function playRound(playerSelection, computerSelection){
    
if(playerSelection == computerSelection){
    playerCount = false;
    computerCount = false;
    return "This round is tie";
}else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
    playerCount = true;
    computerCount = false;
    return "you win, "+ playerSelection +" beats "+computerSelection;
}else if(computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper"){
    computerCount = true; 
    playerCount = false;
    return "you lose, "+ computerSelection +" beats "+playerSelection;
}
}

function game(){
    
   let playerScore=0;
   let computerScore=0;

    for(let i=0;i < 5; i++){
        playerSelection = prompt("Enter the value");
        computerSelection = getComputerChoice();
        
        playRound(playerSelection, computerSelection);
        if (playerCount){
            playerScore += 1;
        }else if(computerCount){
            computerScore += 1;
        }
        
        console.log(playerScore);
        console.log(computerScore);

        console.log("computer "+computerSelection);
        console.log("player "+playerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }

if(playerScore == computerScore){
    return "Both are tie in this match";
}else if(playerScore > computerScore){
    return "player score "+playerScore+" computerScore "+computerScore+"           Player winner";
}else if(playerScore < computerScore){
    return "player score "+playerScore+" computerScore "+computerScore+"           Computer winner!";
}
}
