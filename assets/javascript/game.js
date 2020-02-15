var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuessesSoFar = 0;

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var yourGuessesSoFarText = document.getElementById("yourGuessesSoFar");

var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function (event) {

    var userGuess = event.key;

    
    console.log(computerChoice, "computerChoice");

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

        if (userGuess === computerChoice) {
            wins++;
            guessesLeft--;
        } else if (userGuess !== computerChoice) {
             
            guessesLeft--;
        }
        console.log(wins, losses, "wins,losses");
        console.log(guessesLeft, "guessesLeft");


    winsText.textContent = "Wins:" + wins;
    lossesText.textContent = "Losses:" + losses;
    guessesLeftText.textContent = "Guesses Left:" + guessesLeft;
    yourGuessesSoFarText.textContent = "Your Guesses So Far:" + userGuess;
    }
}

document.location.reload