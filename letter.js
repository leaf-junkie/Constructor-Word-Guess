// Contains a constructor, Letter. This constructor should be able to 
// either display an underlying character or a blank placeholder (such 
// as an underscore), depending on whether or not the user has guessed 
// the letter. That means the constructor should define:
function Letter(string) {
    // TODO: Throw error if string length > 1.
    
    // A string value to store the underlying character for the letter
    this.string = string;

    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;

    // A function that returns the underlying character if the letter has been
    // guessed, or a placeholder (like an underscore) if the letter has not 
    // been guessed
    this.makeGuess = function(character) {
        if (this.string === character) this.guessed = true;
        return;
    };

    // A function that takes a character as an argument and checks it against 
    // the underlying character, updating the stored boolean value to true if 
    // it was guessed correctly
    this.checkGuess = function(character) {
        if (this.guessed) return this.string
        return '_'
        if(this.character === letter) {
            exists === true;
            // drawLetters();
        }
    };

    return this;
};

module.exports = Letter;