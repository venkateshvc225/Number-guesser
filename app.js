/*
- GAME FUNCTION
- Player must guess a number between min to max 
- Player gets certain number of guesses 
- Notify a player with remaining guesses
- Notify  the  player with correct answer player fail to guess
- let player choose play again
*/

//Game values
let min = 1,
    max = 10,
    winnigNum = getRandomNumner(min,max);
    guessLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-value'),
    guessInput = document.querySelector('.guess-input'),
    message = document.querySelector('.message');

//Assign min max values
minNum.textContent = min;
maxNum.textContent = max;

//listen for play again
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})
//listen for event listener
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);
    //validate input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter number between ${min} and ${max}`,'red');
    }
    //check if won
    if(guess === winnigNum){
        gameOver(true,`${winnigNum} is correct You Won!!`);

    }else{
        guessLeft -= 1;        
        if(guessLeft === 0){
            gameOver(false,`Game over,you lost it!! The correct number is ${winnigNum}`);
        }else {
            guessInput.style.borderColor = 'red';
            setMessage(`Wrong guess, you left left ${guessLeft} guesses`,'red');
            guessInput.value = '';
        }
    }
});

//generate Random number between min max range 
function getRandomNumner(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
//Game Over
function gameOver(won,msg){
    won === true ? color ='green':color = 'red';
    guessInput.disable = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg,color);
    //Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}
// set message
function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}
