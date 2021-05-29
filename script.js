
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
        return 'you tied';
    } else if (playerSelection == 'rock' && sign == 'paper') {
        playerWin = false;
        computerWin = true;
        return 'you lost, paper beats rock';
    } else if (playerSelection == 'rock' && sign == 'scissors') {
        playerWin = true;
        computerWin = false;
        return 'you win, rock beats scissors';
    } else if (playerSelection == 'paper' && sign == 'rock') {
        playerWin = true;
        computerWin = false;
        return 'you win, paper beats rock';
    } else if (playerSelection == 'paper' && sign == 'paper') {
        playerWin = false;
        computerWin = false;
        return 'you tied';
    } else if (playerSelection == 'paper' && sign == 'scissors') {
        playerWin = false;
        computerWin = true;
        return 'you lost, scissors beats paper';
    } else if (playerSelection == 'scissors' && sign == 'rock') {
        playerWin = false;
        computerWin = true;
        return 'you lost, rock beats scissors';
    } else if (playerSelection == 'scissors' && sign == 'paper') {
        playerWin = true;
        computerWin = false;
        return 'you win, scissors beats paper';
    } else if (playerSelection == 'scissors' && sign == 'scissors') {
        playerWin = false;
        computerWin = false;
        return 'you tied';
    } else {
        playerWin = false;
        computerWin = true;
        return 'maybe spell rock, paper, or scissors correctly! you lose be default';      
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
            console.log('You won that round: ' + playerScore + '-' + computerScore);
        } else if (computerWin == true) {
            ++computerScore;
            console.log('You lost that round: ' + playerScore + '-' + computerScore);
        } else {
            console.log('You tied that round, no points added: ' + playerScore + '-' + computerScore)
        }
    }
    if (playerScore > computerScore) {
        return `You win ${playerScore}-${computerScore}`;
    } else if (playerScore == computerScore) {
        return `You tied ${playerScore}-${computerScore}`
    } else {
        return `You lose ${playerScore}-${computerScore}`;
    }
}



console.log(game());