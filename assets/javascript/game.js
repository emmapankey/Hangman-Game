// Array of words
var words = [
    'quickest',
    'cobweb',
    'changeable',
    'finicky',
    'seahorse',
    'futuristic',
    'quicksand',
    'opossum',
    'firefly',
    'cyclops',
    'beehive',
    'pancake'];
    
// Random function for choosing a word from the array
var randomWord = "";
    
// Holding variable for the user's guessed letters
var guessedLetters = "";
    
// Variable to set the number of guesses
var numberOfGuessesLeft = 12
    
// Variable to set the number of wins
var numberOfWins = 0

// Variable to set the number of losses
var numberOfLosses = 0
    
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
    numberOfGuessesLeft = 12;
    guessedLetters = "";
    randomWord = words[Math.floor(Math.random() * words.length)];

    randomWord = randomWord.toUpperCase();

    document.getElementById("guesses").innerHTML = guessedLetters;

    document.getElementById("remainingLives").innerHTML = "Lives Remaining: " + numberOfGuessesLeft;

    document.getElementById("wins").innerHTML = "Wins: " + numberOfWins;

    document.getElementById("losses").innerHTML = "Losses: " + numberOfLosses;

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

    document.getElementById('typedLetter').value = "";

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
        numberOfGuessesLeft--;

        document.getElementById("remainingLives").innerHTML = "Lives Remaining: " + numberOfGuessesLeft;

        guessedLetters = guessedLetters.concat(letter);

        document.getElementById("guesses").innerHTML = document.getElementById("guesses").innerHTML + " " + letter;

        var displayString = document.getElementById("theWord").innerHTML;

        var displayStringArray = [];

        for(var i = 0; i < displayString.length; i++) {
            displayStringArray.push(displayString.charAt(i));
        }
        
        for(var i = 0; i < randomWord.length; i++) {
            if(letter === randomWord.charAt(i)) {
                displayStringArray[i * 2] = letter;
            }
        }

        // Rebuild the display string with the added letters otherwise commas will display since arrays have commas
        displayString = "";
        for(var i = 0; i < displayStringArray.length; i++) {
            displayString = displayString.concat(displayStringArray[i]);
        }
        document.getElementById('theWord').innerHTML = displayString;
          
        // If underscores can't be found then the word has been guessed and the game is restarted
        if(displayString.indexOf("_") < 0) {
            numberOfWins++;
            startGame();
        }
    }

    // If all lives are used restart game
    if(numberOfGuessesLeft === 0) {
        numberOfLosses++;
        startGame();
    }

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


   