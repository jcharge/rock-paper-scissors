
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

//functions for adding the computer's sign image on screen
const computerRock = document.createElement('img')
computerRock.src = 'images/computer-rock.jpg';
computerRock.classList.add('computer-image');

function addRockImage() {
    if (results.firstChild) {
        results.removeChild(results.firstChild);
    }
    results.appendChild(computerRock);
}

const computerPaper = document.createElement('img');
computerPaper.src = 'images/computer-paper.jpg';
computerPaper.classList.add('computer-image');

function addPaperImage() {
    if (results.firstChild) {
        results.removeChild(results.firstChild);
    }
    results.appendChild(computerPaper);
}

const computerScissors = document.createElement('img');
computerScissors.src = 'images/computer-scissors.jpg';
computerScissors.classList.add('computer-image');

function addScissorsImage() {
    if (results.firstChild) {
        results.removeChild(results.firstChild);
    }
    results.appendChild(computerScissors);
}

// a function that displays the computer's selection as an Image
function addComputerSelection() {
    if (sign == 'rock') {
        addRockImage();
    } else if (sign == 'paper') {
        addPaperImage();
    } else {
        addScissorsImage();
    }
}

// A results div that displays the results of each round
const results = document.querySelector('#results');
const outCome = document.createElement('p');
const intro = document.querySelector('.intro');

// global declarations for manipulating in other functions
let playerSelection;
let playerScore = 0;
let computerScore = 0;

const humanScoreDiv = document.querySelector('#human-score');
const humanScore = document.createElement('p');
humanScore.textContent = `Your score: ${playerScore}`;
humanScoreDiv.appendChild(humanScore);

const computerScoreDiv = document.querySelector('#computer-score');
const compScore = document.createElement('p');
compScore.textContent = `Computer score: ${computerScore}`;
computerScoreDiv.appendChild(compScore);

// a reset button that resets the score and removes text and itself off the screen
const resetBtn = document.createElement('button');
resetBtn.textContent = 'PLAY AGAIN';

resetBtn.addEventListener('click', function(e) {
    playerScore = 0;
    computerScore = 0;
    outCome.textContent = '';
    results.removeChild(results.firstChild);
    intro.removeChild(outCome)
    intro.removeChild(resetBtn);
    humanScore.textContent = `Your score: ${playerScore}`;
    humanScoreDiv.appendChild(humanScore);
    compScore.textContent = `Computer score: ${computerScore}`
    computerScoreDiv.appendChild(compScore);
})

// the function will play a round of "rock paper scissors". It runs off the images being clicked.
// it also changes some variables
function playRound(playerSelection, computerSelection) {
    computerPlay();

    if (playerSelection == 'rock' && sign == 'rock') {
        addComputerSelection()
    } else if (playerSelection == 'rock' && sign == 'paper') {
        computerScore++;
        addComputerSelection()
    } else if (playerSelection == 'rock' && sign == 'scissors') {
        playerScore++;
        addComputerSelection()
    } else if (playerSelection == 'paper' && sign == 'rock') {
        playerScore++;
        addComputerSelection()
    } else if (playerSelection == 'paper' && sign == 'paper') {
        addComputerSelection()
    } else if (playerSelection == 'paper' && sign == 'scissors') {
        computerScore++;
        addComputerSelection()
    } else if (playerSelection == 'scissors' && sign == 'rock') {
        computerScore++;
    } else if (playerSelection == 'scissors' && sign == 'paper') {
        playerScore++;
        addComputerSelection()
    } else if (playerSelection == 'scissors' && sign == 'scissors') {
        addComputerSelection()
    } else {
        computerScore++;  
        addComputerSelection()   
    }
    if (playerScore == 5 && playerScore > computerScore && outCome.textContent == '') {
    outCome.textContent = `YOU WIN!!! ${playerScore}-${computerScore}`;
    intro.appendChild(outCome);
    intro.appendChild(resetBtn);
    } else if (computerScore == 5 && computerScore > playerScore && outCome.textContent == '') {
    outCome.textContent = `THE COMPUTER WINS : ${playerScore}-${computerScore}`;
    intro.appendChild(outCome);
    intro.appendChild(resetBtn);
    }

    humanScore.textContent = `Your score: ${playerScore}`;
    humanScoreDiv.appendChild(humanScore);
    compScore.textContent = `Computer score: ${computerScore}`
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

// a function for removing a class from a previously clicked image
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('img-click')
}

// this event listens for a transitionend and runs the removeTransition function
const selection = document.querySelectorAll('.selection');
selection.forEach(selection => selection.addEventListener('transitionend', removeTransition))

