const btn = document.querySelectorAll('button');
const result = document.querySelector('.scores');
const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#ComputerScore');
const container = document.querySelector('.container');
let computerScore = 0;
let playerScore = 0;


function playRound(e) {
  
    
    const hand = Math.floor(Math.random() * 3)+1;
    let choice;
    if(hand === 1) choice = 'Rock';
    if(hand === 2) choice = 'Paper';
    if(hand === 3) choice = 'Scissor';
    const userChoice = e.target.value;

    if(playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? 'Player' : 'Computer';
        container.style
        result.textContent = `${winner} won the game!`;
        btn.forEach((button) => button.disabled = true);
        return;
    }

    if (
        (userChoice === 'Rock' && choice === 'Scissor') || // Rock beats Scissors
        (userChoice === 'Paper' && choice === 'Rock') || // Paper beats Rock
        (userChoice === 'Scissor' && choice === 'Paper')    // Scissors beats Paper
        ) {
            playerScore++;
            pScore.textContent = `Player : ${playerScore}`;
        } else if(userChoice == choice) {
            alert("tie");
        } else {
            computerScore++;
            cScore.textContent = `Player 2 : ${computerScore}`;
        }
        console.log(`computer's choice was ${choice}`);
        console.log(`yourchoice was ${userChoice}`);
        console.log(`playerscore is ${playerScore}`);
        console.log(`computerscore is ${computerScore}`);
    
}

btn.forEach((button) => {
    button.addEventListener('click', playRound);
});





































