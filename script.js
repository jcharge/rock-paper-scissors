
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

// A results div that displays the results of each round
const results = document.querySelector('#results');
const para = document.createElement('p');
const outCome = document.createElement('p');

// the function will play a round of "rock paper scissors". It will allow input from the player and determine who won the round

let playerSelection;
let playerScore = 0;
let computerScore = 0;

const humanScoreDiv = document.querySelector('#human-score');
const humanScore = document.createElement('p');
humanScore.textContent = `You: ${playerScore}`;
humanScoreDiv.appendChild(humanScore);

const computerScoreDiv = document.querySelector('#computer-score');
const compScore = document.createElement('p');
compScore.textContent = `Computer: ${computerScore}`;
computerScoreDiv.appendChild(compScore);

function playRound(playerSelection, computerSelection) {
    computerPlay();

    if (playerSelection == 'rock' && sign == 'rock') {
        para.textContent = `you tied this round`;
        results.appendChild(para);
    } else if (playerSelection == 'rock' && sign == 'paper') {
        computerScore++;
        para.textContent = `you lose this round, rock loses to paper`;
        results.appendChild(para);
    } else if (playerSelection == 'rock' && sign == 'scissors') {
        playerScore++;
        para.textContent = `you win this round, rock beats scissors`;
        results.appendChild(para);
    } else if (playerSelection == 'paper' && sign == 'rock') {
        playerScore++;
        para.textContent = `you win this round, paper beats rock`;
        results.appendChild(para);
    } else if (playerSelection == 'paper' && sign == 'paper') {
        para.textContent = `you tied this round`;
        results.appendChild(para);
    } else if (playerSelection == 'paper' && sign == 'scissors') {
        computerScore++;
        para.textContent = `you lose this round, paper loses to scissors`;
        results.appendChild(para);
    } else if (playerSelection == 'scissors' && sign == 'rock') {
        computerScore++;
        para.textContent = `you lose this round, scissors loses to rock`;
        results.appendChild(para);
    } else if (playerSelection == 'scissors' && sign == 'paper') {
        playerScore++;
        para.textContent = `you win this round, scissors beats paper`;
        results.appendChild(para);
    } else if (playerSelection == 'scissors' && sign == 'scissors') {
        para.textContent = `you tied this round`;
        results.appendChild(para);
    } else {
        computerScore++;
        para.textContent = `I guess the computer cheated, you lose this round`;
        results.appendChild(para);      
    }
    if (playerScore == 5 && playerScore > computerScore && outCome.textContent == '') {
    outCome.textContent = `YOU WIN!!! ${playerScore}-${computerScore}`;
    results.insertBefore(outCome, para);
    } else if (computerScore == 5 && computerScore > playerScore && outCome.textContent == '') {
    outCome.textContent = `THE COMPUTER WINS : ${playerScore}-${computerScore}`;
    results.insertBefore(outCome, para);
    }

    humanScore.textContent = `You: ${playerScore}`;
    humanScoreDiv.appendChild(humanScore);
    compScore.textContent = `Computer: ${computerScore}`
    computerScoreDiv.appendChild(compScore);
};

// corresponding the buttons with the player's choice of rock paper or scissors

const rock = document.querySelector('#rock');

rock.addEventListener('click', function(e) {
    playerSelection = 'rock';
    rock.classList.add('img-click');
    playRound(playerSelection);
})

const paper = document.querySelector('#paper');

paper.addEventListener('click', function(e) {
    playerSelection = 'paper';
    paper.classList.add('img-click');
    playRound(playerSelection);
})

const scissors = document.querySelector('#scissors');

scissors.addEventListener('click', function(e) {
    playerSelection = 'scissors';
    scissors.classList.add('img-click');
    playRound(playerSelection);
})

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('img-click')
}

const selection = document.querySelectorAll('.selection');
selection.forEach(selection => selection.addEventListener('transitionend', removeTransition))