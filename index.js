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

const dogBreeds = [
    'Afghan Hound',
    'Akita',
    'Alaskan Malamute',
    'American Eskimo Dog',
    'Australain Shepherd',
    'Basenji',
    'Beagle',
    'Bernese Mountain Dog',
    'Black Mouth Cur',
    'Blue Heeler',
    'Border Collie',
    'Boxer',
    'Bull Terrier',
    'Canaan Dog',
    'Chesapeake Bay Retriever',
    'Chihuahua',
    'Chow Chow',
    'Dachshund',
    'Dogo Argentino',
    'East Siberian Laika',
    'Fox Terrier',
    'French Bulldog',
    'German Shepherd Dog',
    'Golden Retriever',
    'Great Pyranees',
    'Havanese',
    'Himalayan Sheepdog',
    'Irish Setter',
    'Irish Wolfhound',
    'Swedish Elkhound',
    'Jindo',
    'Keeshond',
    'Labrador Retriever',
    'Landseer',
    'Louisiana Catahoula Leopard Dog',
    'Maltese',
    'Mudi',
    'Newfoundland',
    'Nova Scotia Duck Tolling Retriever',
    'Papillon',
    'Pomeranian',
    'Portuguese Water Dog',
    'Pug',
    'Rat Terrier',
    'Rhodesian Ridgeback',
    'Rottweiler',
    'Saarloos Wolfdog',
    'Saint Bernard',
    'Samoyed',
    'Shetland Sheepdog',
    'Shiba Inu',
    'Shiloh Shepherd',
    'Siberian Husky',
    'Tibetan Mastiff',
    'Treeing Cur',
    'Weimaraner',
    'Welsh Pembroke Corgi',
    'Yorkshire Terrier'
];

// TODO:Randomly selects a word and uses the Word constructor to store it
// 'Randomly' select word from array
const randomIndex = Math.floor(Math.random() * dogBreeds.length);
const randomWord = dogBreeds[randomIndex];

console.log(`The selected word is: ${randomWord} (Index ${randomIndex})`);

// Move guessed letters into another array
let letters = 'abcdefghijklmnopqrstuvwxyz ';
letters = letters.toUpperCase();
let guessed = [];

// TODO:Prompts the user for each guess and keeps track of the user's remaining guesses
// Begin with 10 guesses
let guessesRemaining = 10;

function keyUpHandler(event) {
    // Filter characters that are not letters or spaces
    if (!letters.includes(event.key.toUpperCase())) return;

    // Ignore redundant input
    if (guessed.includes(event.key)) {
        return;
    } else {
        guessed.push(event.key);
    }
    console.log(`${guessed}`);
};

 // Check if pressed letter is included in name of current plant 
 if (checkLetter(event.key)) {
    // had the letter
    
} else {
    // did not have the letter

    // Decrement guess count
    guessesRemaining -= 1;
    
    // Display the number of remaining guesses under 'Guesses Remaining'
    console.log('Number of guesses remaining: ' + guessesRemaining);
    document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
};

// Win
function win() {
    let wins;
    wins += 1;
    console.log('You win!');

    //TODO: Could add new inquirer question to ask if user would like to play again
};

function lose() {
    let losses;
    losses -= 1;
    console.log('You lost \nGAME OVER');

    //TODO: Could add new inquirer question to ask if user would like to play again
};

function reset() {
    guessesRemaining = 10;
    guessed = [];
    randomIndex = Math.floor(Math.random() * dogBreeds.length);
    randomWord = dogBreeds[randomIndex];
    console.log(`Reset. New word: ${randomWord}`);

}