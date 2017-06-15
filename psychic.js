//create needed global variables
var wins = 0;
var looses = 0;
var guessesLeft = 10;
var wrongGuesses = [];
var computerChoice = "";
var userChoice = "";

//the computer picks a letter,
function computerMakesChoice() {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  console.log('randomIndex', randomIndex);

  computerChoice = alphabet[randomIndex];
  console.log('computerChoice', computerChoice);
}

computerMakesChoice();

//the user picks a lettter of the alphabet,
document.onkeyup = function(event) {
  // console.log('event', event);
  userChoice = (event.key).toLowerCase();
  console.log('userChoice1', userChoice);
  }

// console.log('userChoice2', userChoice);
//and then ew need to compare the two,

if (userChoice == computerChoice){
  win++;
  document.getElementById("userWin").innerHTML = win;
  guessesLeft=10;
}
else {

//CHECK WIN CONDITION: if they match, user wins
// if(//comparison) {
  //increment wins counter

  // restart game

// }

  guessesLeft--;
  
  wrongGuesses.push(userChoice);
  // document.getElementById("lettersUsed").innerHTML = wrongGuesse;
  }
//if they don't matech,
  //if user has guesses left,
    //number of guesses decreases
    //then they get to guess again
    //push the wrong letter guessed into array of wrong guesses
  //else, if user has 0 guesses left, user loosess

  if(guessesLeft == 0) {
  looses++;
  document.getElementById("loss").innerHTML = looses;
  // document.getElementById("guesses").innerHTML = guessesLeft;
}
  
    //increment the loosess
    //restart start game