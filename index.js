


function getComputerChoice(){
    const choice=["rock","paper","scissors"];
    const i = Math.floor(Math.random()*3);
    return choice[i];
}

const computerSelection = getComputerChoice();
const playerSelection = "rock";
console.log("computer "+computerSelection);
console.log("player "+playerSelection);
console.log(makeDecision(playerSelection,computerSelection));

function makeDecision(playerSelection, computerSelection){

if(playerSelection == computerSelection){
    return "This round is tie";
}else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
    return "you win, "+ playerSelection +" beats "+computerSelection;
}else if(computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper"){
    return "you lose, "+ computerSelection +" beats "+playerSelection;
}


}


