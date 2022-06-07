// import needed modules
import { getRandomItem, score } from './utils.js';
// state
let wins = 0;
let losses = 0;
let draw = 0;
let games = 0;

let playerThrow = 'rock';
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

function handleWinner(playerThrow) {
    // get cpu throw
    cpuThrow = getRandomItem(arr);
    
    // use score to get a result
    let result = score(playerThrow, cpuThrow);

    // update states
    updateStates(result);

    // store selection for background color change
    let pThrow = playerThrow;

    // update the display with the new results
    updateDisplay();
}

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

function playerSelect() {
    // get value for playerThrow
}

const rollResult = document.getElementById('throw');
rollResult.addEventListener('click', () => {
    handleWinner(playerThrow);
});

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


