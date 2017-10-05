
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

// Variable to set the number of guesses
var numberOfGuesses = 0

// Holding variable for the user's guessed letters
var guessedLetters = "";

// Random function for choosing a word from the array
var randomWord = "";

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

function startGame() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    randomWord = randomWord.toUpperCase();
    guessedLetters = "";
    numberOfGuesses = 10;
    var displayString = "";
    for(var i = 0; i < randomWord.length; i++) {
        displayString = displayString.concat("_ ");
    }
    document.getElementById('theWord').innerHTML = displayString;
}

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
        numberOfGuesses++;
        // display guesses left. check to see if 10 guesses has been reached then start new game.
    }
    document.getElementById('typedLetter').value = "";
}

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