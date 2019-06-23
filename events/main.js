var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessFar = [];
var computerGuess = "";
var userGuess= "";

function reset(){
guessesLeft = 9;
guessFar = [];
}

function startGame(){
  document.querySelector("#guessFar").innerHTML = "";
reset();
}

// Cuando poner refresh resetea 
function refresh(){

// Pone resultados en pantalla
var winsText = document.getElementById("wins");
winsText.textContent = wins;

var lossesText = document.getElementById("losses");
lossesText.textContent = losses;

var guessesText = document.getElementById("guessesLeft");
guessesText.textContent = guessesLeft;

var farText = document.getElementById("guessFar");
farText.textContent = guessFar;
}

refresh();

var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess)

document.onkeyup = function(event) {
    // Determines which key was pressed. // lo guarda en el console.log(userGuess)
    userGuess = event.key;
    console.log(userGuess)

 if (userGuess === computerGuess) {
  wins++;
 alert("YOU WIN");
 reset();
 refresh();
//  genera otro numero una vez ganas
 computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 console.log(computerGuess)
 } else {
  guessesLeft--;
  guessFar.push(userGuess);
  if (guessesLeft === 0) {
    reset();
 
  }
 }
 refresh();
}