'use strict';

// document.querySelector('.message').textContent = "🎉 It's Correct";
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 24;

// document.querySelector('.guess').value = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔ Guess a Number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage("🎉 It's Correct");

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // } else if (secretNumber < guess) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = "📈 it's too high ";
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 you lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (secretNumber > guess) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = "📉 it's too low ";
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 you lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        secretNumber < guess ? "📈 it's too high " : "📉 it's too low "
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
