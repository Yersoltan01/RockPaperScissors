const round = document.querySelector('.submitButton');
const choice = document.querySelector('.inputField');
const resetButton = document.querySelector('.resetButton');
let result = document.querySelector('.results'); 
let userScore = document.querySelector('.userWins');
let computerScore = document.querySelector('.computerWins');
let userWins = 0, computerWins = 0;

function playRound() {
    const userChoice = choice.value;
    const computerChoice = computerPlay();
    
    let winner;
    let text;
    let sensitiveUserChoice = userChoice.toLowerCase();
    sensitiveUserChoice = sensitiveUserChoice.charAt(0).toUpperCase() + sensitiveUserChoice.slice(1);

    document.querySelector('.userResults').textContent = 'Your choice: ' + sensitiveUserChoice;
    document.querySelector('.computerResults').textContent = 'Computer choice: '  + computerChoice;

    switch(sensitiveUserChoice) {
        case 'Rock': 
            if(computerChoice == 'Scissors') {
                text = 'You Won! \
                Rock beats Scissors';
                winner = 'user';
            }
            else if(computerChoice == 'Paper') {
                text = 'You Lost! \
                Paper beats Rock';
                winner = 'computer';
            }
            else {
                text = 'Draw!';
                winner = 'draw';
            } 
            break;
        case 'Paper': 
            if(computerChoice == 'Rock') {
                text = 'You Won! \
                Paper beats Rock';
                winner = 'user';
            }
            else if(computerChoice == 'Scissors') {
                text = 'You Lost! \
                Scissors beats Paper';
                winner = 'computer';
            }
            else {
                text = 'Draw!';
                winner = 'draw';
            } 
            break;
        case 'Scissors': 
            if(computerChoice == 'Paper') {
                text = 'You Won! \
                Scissors beats Paper';
                winner = 'user';
            }
            else if(computerChoice == 'Rock') {
                text = 'You Lost! \
                Rock beats Scissors';
                winner = 'computer';
            }
            else {
                text = 'Draw!';
                winner = 'draw';
            } 
            break;
        default: 
            text = 'Please, enter valid data.'
    }

    if(winner === 'user') {
        userWins++;
    }
    if(winner === 'computer') {
        computerWins++;
    }
    resetButton.addEventListener('click', reset);

    result.textContent = text;
    userScore.textContent = userWins;
    computerScore.textContent = computerWins;

    if(computerWins === 5) {
        alert('You lost the game. Try one more time!')
        reset();
    }

    if(userWins === 5) {
        alert('Congratulations! You are a winner.')
        reset();
    }

    function reset() {
        userWins = 0;
        computerWins = 0;
        document.location.reload();
    }
}

round.addEventListener('click', playRound);

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    let computerChoice = null;
    if(random == 0) {
        computerChoice = 'Rock';
    }
    else if(random == 1) {
        computerChoice = 'Paper';
    }
    else computerChoice = 'Scissors';
    return computerChoice;
}