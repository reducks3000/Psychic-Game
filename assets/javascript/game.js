//define variables for game play
let winCount = 1;
let lossCount = 0;
let guessesRemaining = 10;
let guessedLetters = [];

// set up array for computer to choose from
const letter =
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"
        , "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// set up the computer to pick a random indexed value from aray
let random = Math.floor(Math.random() * letter.length);
const computerChoice = letter[random];

console.log(computerChoice);

// add a listener for the user to press a key
document.onkeyup = function (event) {
    let userChoice = event.key;
  // make sure the user selects a value a-z
    let regexp = /[a-z]/gi;
    if (!regexp.test(userChoice)) {
        alert("please enter a letter");
    }
    else {
        console.log(userChoice);
    }
    // reset computer choice if the user loses
    if (guessesRemaining <= 0) {
        lossCount++;

        document.getElementById("lossCount").innerHTML = lossCount++;
        
        console.log("You lost!");

        alert("You lost!");

        guessesRemaining = 10;

        guessedLetters = [];

        document.getElementById("guessedLetters").innerHTML = guessedLetters;

        document.getElementById("guessesRemaining").innerHTML = 10;

        random = Math.floor(Math.random() * letter.length);

        computerChoice = letter[random];

        console.log(computerChoice);
    }
    // compares the randomly selected computer choice and user choice
    if (computerChoice === userChoice) {

        console.log("You won!");

        alert("You won!");

        document.getElementById("winCount").innerHTML = winCount++;

        guessedLetters = [];

        document.getElementById("guessedLetters").innerHTML = guessedLetters;

        random = Math.floor(Math.random() * letter.length);

        computerChoice = letter[random];

        console.log(computerChoice);

        guessesRemaining = 10;

        document.getElementById("guessesRemaining").innerHTML = 10;

    } else {

        console.log("Guess again!");

        document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;

        guessedLetters.push(userChoice);

        document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
}
