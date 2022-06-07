// import needed modules
import { getRandomItem, score } from './utils.js';
// state
let wins = 0;
let losses = 0;
let draw = 0;
let games = 0;
let picking = 1;

let cpuThrow = '';

const arr = ['rock', 'paper', 'scissors'];

// components
    // component
    // define and grab DOM elements
    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// get player and cpu input, update states, update display
function handleWinner(playerThrow) {
    // get cpu throw
    cpuThrow = getRandomItem(arr);
    
    // use score to get a result
    let result = score(playerThrow, cpuThrow);

    // update states
    updateStates(result);

    // update picking
    picking = 0;
    updateClasses();

    // update the display with the new results
    updateDisplay();
    updateWinLoss(result, playerThrow, cpuThrow);
}

// update states based on the result of the match
function updateStates(result) {
    if (result === 1) {
        wins++;
        games++;
    }
    else if (result === 0) {
        draw++;
        games++;
    }
    else {
        losses++;
        games++;
    }
}

// get dom elements add event listeners to pass on player choice
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', () => {
    handleWinner('rock');
});

paper.addEventListener('click', () => {
    handleWinner('paper');
});

scissors.addEventListener('click', () => {
    handleWinner('scissors');
});

// get dom elements and update outcome display based on inputs
const playerChoice = document.getElementById('player-thrown');
const cpuChoice = document.getElementById('cpu-thrown');
const winLossDisplay = document.getElementById('win-loss');

function updateWinLoss(result, playerThrow, cpuThrow) {
    playerChoice.src = 'assets/' + playerThrow + '.png';
    cpuChoice.src = 'assets/' + cpuThrow + '.png';
    
    if (result === 1) {
        winLossDisplay.textContent = 'You Win!';
    }
    else if (result === 0) {
        winLossDisplay.textContent = 'Draw Game';
    }
    else {
        winLossDisplay.textContent = 'You Lose';
    }
}

// get dom elements and update hidden class
const outcome = document.getElementById('outcome');
const playerInput = document.getElementById('player-input');

function updateClasses() {
    if (picking) {
        outcome.classList = 'centered';
        outcome.classList.add('hidden');
        playerInput.classList = 'player-input';
    }
    else {
        playerInput.classList = 'player-input';
        playerInput.classList.add('hidden');
        outcome.classList = 'centered';
    }
}

// get dom element playagain button and add updateClasses function to play again, rehidding what you dont need
const playAgain = document.getElementById('play-again');

playAgain.addEventListener('click', () => {
    picking = 1;
    updateClasses();
});

//grab all elements elements to update score display
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const drawResults = document.getElementById('draw-results');
const totalGames = document.getElementById('total-games');

function updateDisplay() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawResults.textContent = draw;
    totalGames.textContent = games;
}

// page load actions


