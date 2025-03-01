//Variables
let humanScore = 0;
let computerScore = 0;
let round = 1;

// variables for the buttons
let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");
let but = document.querySelectorAll("button");

//variables for the gamescreen
let humanPick = document.querySelector("#your-choice");
let compPick = document.querySelector("#comp-choice");
let outcome = document.querySelector("#your-outcome");

//variables for gamescore
let roundNumb = document.querySelector("#round-number");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");


//computer choice
function getComputerChoice(){

    let computerChoice = Math.round(Math.random() * (3 - 1) + 1);

    if(computerChoice == 1){
        compPick.textContent = "Rock";
        return "Rock";
    }

    else if(computerChoice == 2){
        compPick.textContent = "Paper";
        return "Paper";
    }

    else{
        compPick.textContent = "Scissors";
        return "Scissors";
    }
}



// human choice
function getHumanChoice(choice){


    if(choice == 1){
        humanPick.textContent = "Rock";
        return "Rock";
    }

    else if(choice == 2){
        humanPick.textContent = "Paper";
        return "Paper"
    }

    else if(choice == 3){
        humanPick.textContent = "Scissors";
        return "Scissors"
    }

    else{
        return -1;
    }    
}


function playRound(humanChoice, computerChoice){

    if(humanChoice == computerChoice){
        outcome.textContent = "Tie";
        return "Tie"
    }

    //conditions for human winning
    if((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")){
        humanScore += 1;
        userScore.textContent = humanScore;
        outcome.textContent = "Win!";

        if(humanScore == 5){
            userScore.style.color = "lightgreen";
            for(i = 0; i < but.length; i++){
                but[i].disabled = true;
                but[i].style.backgroundColor = "rgb(19, 109, 136)";
                but[i].style.cursor = "default";
            }
            alert("You Have Won The Game!");
        }

        return "Win"
    }

    //conditions for computer winning
    if((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Rock")){
        computerScore += 1;
        compScore.textContent = computerScore;
        outcome.textContent = "Lose!";

        if(computerScore == 5){
            userScore.style.color = "lightgreen";
            for(i = 0; i < but.length; i++){
                but[i].disabled = true;
                but[i].style.backgroundColor = "rgb(19, 109, 136)";
                but[i].style.cursor = "default";
            }
            alert("You Have Lost The Game!");
        }

        return "Lose";
    }
}


function playGame(){

    roundNumb.textContent = round;

    userScore.textContent = humanScore;
    compScore.textContent = computerScore;


    rockButton.addEventListener('click', function(){                
        playRound(getHumanChoice(1),getComputerChoice());

    });
    
    
    
    paperButton.addEventListener('click', function(){
        playRound(getHumanChoice(2),getComputerChoice());
    });
    
    
    scissorsButton.addEventListener('click', function(){
        playRound(getHumanChoice(3),getComputerChoice());
    });    
}


playGame();