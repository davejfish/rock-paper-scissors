// IMPORT code to test here
// import { fn } from '../module.js';
import { score } from '../utils.js';

const test = QUnit.test;

test('test your pure functions...', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test player winning cases', (expect) => {
    expect.equal(score('rock', 'scissors'), 1);
    expect.equal(score('paper', 'rock'), 1);
    expect.equal(score('scissors', 'paper'), 1);
});

test('test cpu win cases', (expect) => {
    expect.equal(score('rock', 'paper'), -1);
    expect.equal(score('paper', 'scissors'), -1);
    expect.equal(score('scissors', 'rock'), -1);
});

test('test draw cases', (expect) => {
    expect.equal(score('rock', 'rock'), 0);
    expect.equal(score('paper', 'paper'), 0);
    expect.equal(score('scissors', 'scissors'), 0);
});