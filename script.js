
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

    let humanChoice = prompt("Enter \"Rock\", \"Paper\", or \"Scissors\"");

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




function playGame(){

    console.log("Welcome to a game of rock, paper, scissors. You will be playing against the Computer.");
    console.log("You will play five rounds for a best of 3 each round. Good Luck!");

    let round = 1;


    console.log(`Round #${round}`);

    while(round < 6){



        //if human wins a round
        if(humanScore == 3){

            if(round+1 == 6){
                console.log("Thank You For Playing!");
                break;
            }


            console.log("You Have Won The Round! Get Ready For the Next");
            humanScore = 0;
            computerScore = 0;
            round++;
            console.log(`Round #${round}`);
        }


        //if computer wins a round
        if(computerScore == 3){

            if(round+1 == 6){
                console.log("Thank You For Playing");
                break;
            }

            console.log("You Have Lost The Round! Get Ready For the Next");
            humanScore = 0;
            computerScore = 0;
            round++;
            console.log(`Round #${round}`);
        }


        console.log(humanScore);
        console.log(computerScore);

        playRound(getHumanChoice(), getComputerChoice());
    }
}



playGame();