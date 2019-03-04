// The file containing the logic for the course of the game, which depends on Word.js and:
const inquirer = require('inquirer');
    
    inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your name?',
        },
        {
            type: 'list',
            name: 'begin',
            message: 'What would you like to do?',
            choices: ['New game', 'Exit']
        }
    ]).then(function(response) {
        if (response.begin.choices[0]) {
            console.log(`\nWelcome to Word Guess, ${response.username}`);
            console.log('Use the keyboard to guess letters in the word. \nYou have 10 guesses.');
            startGame();
        } else return;
    });

function startGame() {

}


// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses
