
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
        return "Invalid Option, Try Again";
    }    
}


