
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){

    let computerChoice = Math.round(Math.random() * (3 - 1) + 1);

    if(computerChoice == 1){
        return "Rock";
    }

    else if(computerChoice == 2){
        return "Paper";
    }

    else{
        return "Scissors";
    }
}



function getHumanChoice(){

    let humanChoice = prompt("Enter Your Choice!");

    if(humanChoice == "Rock" || humanChoice == "rock"){
        return "Rock";
    }

    else if(humanChoice == "Paper" || humanChoice == "paper"){
        return "Paper"
    }

    else if(humanChoice == "Scissors" || humanChoice == 'scissors'){
        return "Scissors"
    }

    else{
        return -1;
    }    
}


function playRound(humanChoice, computerChoice){

    //if both choices are the same
    if(humanChoice == computerChoice){
        console.log("Tie");
    }

    //conditions for human winning
    if((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")){
        console.log("You Win!");
        humanScore += 1;
    }

    //conditions for computer winning
    if((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Rock")){
        console.log("You Lose!");
        computerScore += 1;
    }

    if(humanChoice == -1){
        console.log("Invalid Choice, Try Again");
    }
}

