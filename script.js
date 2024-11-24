

//step1 --> get computer's choice

const choice = Math.floor(Math.random() * 3) +1;

//step2 --> get user's choice



let playerScore = 0; 
let computerScore = 0;

for(let i = 0; i< 3; i++) {
    const userChoice = Number(prompt("choose 1 for Rock, 2 for paper and 3 for scissor"))

    if((userChoice === 2 && choice === 1) && (userChoice === 1 && choice === 3) && (userChoice === 3 && choice === 2)) {
        console.log("You win");
        playerScore += 1;
    } else if(userChoice === choice) {
        console.log("TIE!!");
    } else {
        console.log("YOU LOSE");
        computerScore += 1;
    }
    
    console.log(`Computer's choice was ${choice}`);
    console.log(`your score is ${playerScore} and your opponent's score is ${computerScore}`);
}

if(playerScore > computerScore) {
    console.log("user has won");
}else {
    console.log("computer has won");
}
console.log('round is over');

