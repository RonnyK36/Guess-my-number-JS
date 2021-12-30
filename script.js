'use strict';

// const message = document.querySelector('.message');

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 10;
let highscore = 0;
let theNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  theNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '$$';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '💔 No number';
  } else if (guess === theNumber) {
    document.querySelector('.message').textContent = 'Correct😋 number 🤩🥰😋';
    document.querySelector('.number').textContent = theNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== theNumber) {
    if (score > 0) {
      getMessage(guess, theNumber);
      score--;
    } else {
      document.querySelector('.message').textContent = 'Your lose 🤣😂😂';
    }
  }

  function getMessage(guess, theNumber) {
    let deviation = theNumber - guess;
    // let newScore = score;

    console.log(`The number: ${theNumber}`);

    if (guess > 20) {
      document.querySelector('.message').textContent = 'Should be between 1-20';
    }
    if (deviation > -3 && deviation < 3) {
      console.log(deviation);
      document.querySelector(
        '.message'
      ).textContent = `${guess} is very close 😁`;
      score--;
      document.querySelector('.score').textContent = score;
    } else if (deviation > -5 && deviation < 5) {
      console.log(deviation);
      document.querySelector('.message').textContent = `You are getting closer`;
      score--;
      document.querySelector('.score').textContent = score;
    } else if (deviation > -10 && deviation < 10) {
      console.log(deviation);
      document.querySelector('.message').textContent = `Way too far`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(deviation);
      document.querySelector(
        '.message'
      ).textContent = `${guess} is not even close`;
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
