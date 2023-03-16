



//users choice
const getUserChoice = (userInput) => {
    ///code goes here to say what you want to do
    if(userInput=== "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput
    }else{
        alert("please type the correct input");
    }
};
getUserChoice("paper");
//console.log(getUserChoice())

//computers choice
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 +1);
    console.log(randomNumber);

    if(randomNumber === 1) {
        return "rock";
    } else if(randomNumber === 2) {
        return "paper";
    } else if (randomNumber=== 3) {
        return "scissors";
    }
};


///compare or vs
const determineWinner = (userInput, computerChoice) => {
    if(userInput === computerChoice) {
        return "TIE";
    } else if(userInput === "rock" && computerChoice === "scissors" || userInput === "scissors" && computerChoice === "paper" || userInput === "paper" && computerChoice === "rock") {
        return "WIN";
    } else if(userInput === "rock" && computerChoice === "paper" || userInput === "paper" && computerChoice === "scissors" || userInput === "scissors" && computerChoice === "rock") {
        return "LOSE";
    }
}



const playGame = () => {
    const userChoice = getUserChoice("rock");
    console.log("userChoice:",userChoice);
    const computerChoice = getComputerChoice();
    console.log("computerchoice:",computerChoice)
    return determineWinner(userChoice, computerChoice);
}

const x = playGame();
console.log(x)

///start the program
///THIS IS A TEST