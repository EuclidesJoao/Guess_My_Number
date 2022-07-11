'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);

let score = 10;
let highscore = 0;


const displayMessage = message =>{
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess)
        displayMessage('NO NUMBER');
    else 
        if(guess === secretNumber){
            displayMessage('Correct Number');
            document.body.style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '30rem'
            document.querySelector('.number').textContent = secretNumber;

            if(highscore<=score){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        else if(guess !== secretNumber){
            if(score > 1){
                displayMessage(guess > secretNumber ? 'Too high' : 'Too low')
                score-=1;
                document.querySelector('.score').textContent = score;
            }
            else{
                score-=1;
                displayMessage('YOU LOST THE GAME')
                document.querySelector('.score').textContent = score;
            }
        }
    }   
);

const message = 'Start guessing';

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 10;
    displayMessage(message);
    document.body.style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';
    console.log(secretNumber);
});