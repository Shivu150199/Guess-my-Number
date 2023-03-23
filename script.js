'use strict';
/*
console.log(document.querySelector('.message').textContent); 
document.querySelector('.message').textContent='⭐correct Number!';
document.querySelector('.number').textContent='10';
document.querySelector('.score').textContent='15';

document.querySelector('.guess').value=23;*/

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let a = function (scores) {
  document.querySelector('.score').textContent = scores;
};
let n = function (showNum) {
  document.querySelector('.number').textContent = showNum;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('⛔ No number');
    // document.querySelector('.message').textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    displayMessage('🏆Correct number!');
    // document.querySelector('.message').textContent = '🏆Correct number!';
    n(secretNumber);
    // document.querySelector('.number').textContent = secretNumber;
    //adding green color if ans is correct
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      // document.querySelector('.message').textContent = guess>secretNumber?
      // '📈Too high!':'📉Too low!';
      score--;
      a(score);
      //   document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost💣');
      // document.querySelector('.message').textContent = 'you lost💣';
      a(0);
      //   document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

//when guess is high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost💣';
//       document.querySelector('.score').textContent = 0;
//     }
//when guess in low
//  } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost in game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  // const secretNumber2 = Math.floor(Math.random() * 20) + 1
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  n(secretNumber);
  n('?');
  //   document.querySelector('.number').textContent = secretNumber;
  //   document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  //   document.querySelector('.message').textContent = 'Start guessing...';
  a(score);
  //   document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
