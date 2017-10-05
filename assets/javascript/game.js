
// Array of words
var words = [
'quickest',
'cobweb',
'changeable',
'finicky',
'futuristic',
'quicksand',
'opossum',
'pancake'];

// Random function for choosing a word from the array
var randomWord = "";

// Holding variable for the user's guessed letters
var guessedLetters = "";

// Variable to set the number of guesses
var numberOfGuesses = 0

// Variable to set the number of wins
var numberOfWins = 0

var firstTime = true;

// Setting the randomly generated word equal to the word displayed in the browser.
var selectedWord = words[randomWord];

document.onkeyup = function(event) {
    if(firstTime) {
        startGame();
        firstTime = false;
    }
    else {
        playLetter();
    }
}

// Function for starting the game
function startGame() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    randomWord = randomWord.toUpperCase();
    guessedLetters = "";
    numberOfGuesses = 10;
    document.getElementById("remainingLives").innerHTML = document.getElementById("remainingLives").innerHTML + " " + numberOfGuesses;
    document.getElementById("wins").innerHTML = document.getElementById("wins").innerHTML + " " + numberOfWins;
    var displayString = "";
    for(var i = 0; i < randomWord.length; i++) {
        displayString = displayString.concat("_ ");
    }
    document.getElementById('theWord').innerHTML = displayString;
}

// Function for handling the letter guessed by the player
function playLetter() {
    var letter = document.getElementById('typedLetter').value;
    letter = letter.toUpperCase();
    if(letter === "") {
        return;
    }
    if(!isLetter(letter)){
        alert("Invalid character. Use only letters a-z. Try again");
    }
    else if(isDuplicate(letter)) {
        alert("This letter has already been guessed. Try Again.");
    }
    else {
        guessedLetters = guessedLetters.concat(letter);
        document.getElementById("guesses").innerHTML = document.getElementById("guesses").innerHTML + " " + letter;
    }
    document.getElementById('typedLetter').value = "";
}

// Functions for verifying that the letter guessed is not a special character or duplicate letter
function isLetter(ch) {
    if(ch >= "A" && ch <= "Z") {
        return true;
    }
    else {
        return false;
    }
}

function isDuplicate(ch) {
    if(guessedLetters.indexOf(ch) >= 0) {
        return true;
    }
    else {
        return false;
    }
}

// Loop for checking if the letter guessed matches any of the letters in the random word
for(var i = 0; i < randomWord.length; i++) {
    if(letter === randomWord.charAt(i)) {
        // change position in displayString to value of letter
    }
    else {
        randomWord.charAt(i).innerHTML = " _";
    }
}

// numberOfGuesses--;
// document.getElementById("livesRemaining").innerHTML = document.getElementById("livesRemaining").innerHTML + numberOfGuesses;
