'use strict';

// DOM Element Selection
const messageEl = document.querySelector('.message');
console.log(messageEl);

//// change the text content of messageEl
// messageEl.textContent = 'Hello from javascript';

const scoreEl = document.querySelector('.score');
// scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
// numberEl.textContent = 10;

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 18;

const guessInputEl = document.querySelector('.guess');
// guessInputEl.value = 6;

// Game state variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Your secret number is: ', secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

/////////////
// basic game logic

document.querySelector('.check').addEventListener('click', function () {
  // code block
  console.log('Check button clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Players guessed: ', guess);

  if (guess === secretNumber) {
    //
    console.log('Correct guess!!!!');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.querySelector('.message').textContent = '✅ You won!';
  } else if (guess > secretNumber) {
    console.log('Too High!!!');
    document.querySelector('.message').textContent = '😲 Too High!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 1) {
      document.querySelector('.message').textContent = '😔 You lost!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  } else if (guess < secretNumber) {
    console.log('Too low!!!!');
    document.querySelector('.message').textContent = '☹️ Too low!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 1) {
      document.querySelector('.message').textContent = '😔 You lost!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function (){
    // block
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    // restart secret number display
    document.querySelector('.number').textContent = "?";
    // restart the score to 
    document.querySelector('.score').textContent = score;
    // empty the guess input value
    document.querySelector('.guess').value = '';
    // enable guess and check input buttons
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
})