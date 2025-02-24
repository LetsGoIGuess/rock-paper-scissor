
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


