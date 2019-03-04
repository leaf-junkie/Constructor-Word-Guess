// Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the 
// user is attempting to guess. That means the constructor should define:
const letter = require('./letter');

function Word() {

    // An array of new Letter objects representing the letters of the underlying word.
    // In other words, an array of letters corresponding to the word.
    this.wordChars = [];

    // 2.) A function that returns a string representing the word. This 
    // should call the function on each letter object (the first function 
    // defined in Letter.js) that displays the character or an underscore 
    // and concatenate those together.
    this.theWord = function() {
        // for each character in the word, push to wordChars array 
        
    };

    // 3.) A function that takes a character as an argument and calls the 
    // guess function on each letter object (the second function defined 
    // in Letter.js)
    this.theChar = function() {

    };
}

module.exports = Word;