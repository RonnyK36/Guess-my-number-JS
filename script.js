'use strict';

// const message = document.querySelector('.message');

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
let highscore = 0;
let theNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    theNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = '💔 No number';
    } else if (guess === theNumber) {
        document.querySelector('.message').textContent = 'Correct number 🤩🥰😋';
        document.querySelector('.number').textContent = theNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess > theNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too high 🙄🙄🙄🙄🙄';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Your lose 🤣😂😂';
        }

    } else if (guess < theNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too low 🙄🙄🙄😶';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose';
        }
    }
});