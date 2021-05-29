
// the function will pick, randomly, 'rock', 'paper', OR 'scissors' for the computer
function computerPlay() {
    computerSelection = Math.floor((Math.random() * 3) + 1);
    switch (computerSelection) {
        case 1:
            sign = 'rock';
        break;
        case 2:
            sign = 'paper';
        break;
        default:
            sign = 'scissors';
    }
};

// the function will play a round of "rock paper scissors". It will allow input from the player and determine who won the round

function playRound(playerSelection = prompt('Pick rock, paper, or scissors: '), computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerPlay();

    if (playerSelection == 'rock' && sign == 'rock') {
        playerWin = false;
        computerWin = false;
        console.log('you tied this round');
    } else if (playerSelection == 'rock' && sign == 'paper') {
        playerWin = false;
        computerWin = true;
        console.log('you lose this round, paper beats rock');
    } else if (playerSelection == 'rock' && sign == 'scissors') {
        playerWin = true;
        computerWin = false;
        console.log('you win this round, rock beats scissors');
    } else if (playerSelection == 'paper' && sign == 'rock') {
        playerWin = true;
        computerWin = false;
        console.log('you win this round, paper beats rock');
    } else if (playerSelection == 'paper' && sign == 'paper') {
        playerWin = false;
        computerWin = false;
        console.log('you tied this round');
    } else if (playerSelection == 'paper' && sign == 'scissors') {
        playerWin = false;
        computerWin = true;
        console.log('you lose this round, scissors beats paper');
    } else if (playerSelection == 'scissors' && sign == 'rock') {
        playerWin = false;
        computerWin = true;
        console.log('you lose this round, rock beats scissors');
    } else if (playerSelection == 'scissors' && sign == 'paper') {
        playerWin = true;
        computerWin = false;
        console.log('you win this round, scissors beats paper');
    } else if (playerSelection == 'scissors' && sign == 'scissors') {
        playerWin = false;
        computerWin = false;
        console.log('you tied this round');
    } else {
        playerWin = false;
        computerWin = true;
        console.log('maybe spell rock, paper, or scissors correctly! you lose this round by default');      
    }

};

// a five round "rock, paper, scissors" game that keeps score and resets the previous score
function game() {
    let computerScore = 0;
    let playerScore = 0;
   for (i = 0; i < 5; i++) {
        playRound();
        if (playerWin == true) {
            ++playerScore;
            console.log('Score: ' + playerScore + '-' + computerScore);
        } else if (computerWin == true) {
            ++computerScore;
            console.log('Score: ' + playerScore + '-' + computerScore);
        } else {
            console.log('Score: ' + playerScore + '-' + computerScore);
        }
    }
    if (playerScore > computerScore) {
        return `You win ${playerScore}-${computerScore}`;
    } else if (playerScore == computerScore) {
        return `You tied ${playerScore}-${computerScore}`;
    } else {
        return `You lose ${playerScore}-${computerScore}`;
    }
}



console.log(game());