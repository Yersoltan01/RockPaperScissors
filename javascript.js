const cavalryman = document.querySelector('.cavalryman');
const archer = document.querySelector('.archer');
const spearman = document.querySelector('.spearman');
const rounds = document.querySelectorAll('.round');
const blood = document.querySelectorAll('#blood');
const results1 = document.querySelector('.roundResults');
const results2 = document.querySelector('.roundMessage');
const gameOver = document.querySelector('.boxBack');
const boxMessage = document.querySelector('.boxMessage');
const ok = document.querySelector('.ok');

let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;

function playRound(playerChoice) {
    let text; 
    let computerChoice = computerPlay();
    
    switch(playerChoice) {
        case 'cavalryman': 
            if(computerChoice == 'archer') {
                text = 'Cavalry beats Archer!';
                winner = 'player';
            }
            else if(computerChoice == 'spearman') {
                text = 'Spearman beats Cavalryman!';
                winner = 'computer';
            }
            else {
                text = 'Draw!';
                winner = 'draw';
            } 
            break;
            case 'archer': 
            if(computerChoice == 'spearman') {
                text = 'Archer beats Spearman!';
                winner = 'player';
            }
            else if(computerChoice == 'cavalryman') {
                text = 'Cavalryman beats Archer!';
                winner = 'computer';
            }
            else {
                text = 'Draw!';
                winner = 'draw';
            } 
            break;
        case 'spearman': 
            if(computerChoice == 'cavalryman') {
                text = 'Spearman beats Cavalryman!';
                winner = 'player';
            }
            else if(computerChoice == 'archer') {
                text = 'Archer beats Spearman!';
                winner = 'computer';
            }
            else {
                text = 'Draw!';
                winner = 'draw';
            } 
            break;
        default: 
            text = 'Something went wrong ): \
            Please, try again.';
    }

    if(roundsPlayed < 5) {
        if(winner === 'player') {
            playerWins++;
            rounds.item(roundsPlayed).style.background = 'gold';
            rounds.item(roundsPlayed).style.border = '3px solid #ffa918';
            results1.style.display = 'block';
            results1.textContent = text;
            results2.textContent = 'Yesss, You won this round'
        }
        if(winner === 'computer') {
            computerWins++;
            rounds.item(roundsPlayed).style.background = 'red';
            blood.item(roundsPlayed).style.display = 'inline';
            results1.style.display = 'block';
            results1.textContent = text;
            results2.textContent =  'Damn, Prince won this round';
        }
        if(winner === 'draw') {
            rounds.item(roundsPlayed).style.background = 'grey';
            results1.style.display = 'none';
            results2.textContent = 'Ohh, It\'s a draw';
        }
        roundsPlayed++;
    }
    
    if(roundsPlayed == 5) {
        if(playerWins > computerWins) {
            boxMessage.textContent = 'Luck is on our side, we are saved!';
        }
        if(playerWins < computerWins) {
            boxMessage.textContent = 'Luck is not on our side. The guard knocks you out...'
        }
        if(playerWins == computerWins) {
            boxMessage.textContent = 'Draw. There will be another party...'
        }
        gameOver.style.display = 'flex';
    }

    function computerPlay() {
        let random = Math.floor(Math.random() * 3);
        let computerChoice = null;
        if(random == 0) {
            computerChoice = 'cavalryman';
        }
        else if(random == 1) {
            computerChoice = 'archer';
        }
        else computerChoice = 'spearman';
        return computerChoice;
    }
}

cavalryman.addEventListener('click', () => {
    playRound('cavalryman');

});
archer.addEventListener('click', () => {
    playRound('archer');
});
spearman.addEventListener('click', () => {
    playRound('spearman');
});

ok.addEventListener('click', () => {
    document.location.reload();
});