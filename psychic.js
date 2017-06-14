//create needed global variables
var wins = 0;
var looses = 0;
var guessesLeft = 10;
var wrongGuesses = [];
var computerChoice = "";
var userChoice = "";

//the computer picks a letter,
function computerMakesChoice() {
  var alphabet = ['a','b','c','d','e','f'];
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  console.log('randomIndex', randomIndex);

  computerChoice = alphabet[randomIndex];
  console.log('computerChoice', computerChoice);
}

computerMakesChoice();

//the user picks a lettter of the alphabet,
document.onkeyup = function(event) {
  console.log('event', event);
  userChoice = event.key;
  console.log('userChoice1', userChoice);
  }

console.log('userChoice2', userChoice);
//and then ew need to compare the two,

//CHECK WIN CONDITION: if they match, user wins
// if(//comparison) {
  //increment wins counter

  // restart game

// }

//if they don't matech,
  //if user has guesses left,
    //number of guesses decreases
    //then they get to guess again
    //push the wrong letter guessed into array of wrong guesses
  //else, if user has 0 guesses left, user loosess
    //increment the loosess
    //restart start game