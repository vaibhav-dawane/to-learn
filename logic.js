let randomNumber = parseInt(Math.random() * 100 + 1)

let submit = document.querySelector('#subt')
let userInput = document.querySelector('#guessField')
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrhi = document.querySelector('.lowOrhi')
let startOver = document.querySelector('.results')


let p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame)
{
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // check if the number entered is from 1-100
    if(isNaN(guess))
    {
        alert("Please Enter a Valid Number")
    }
    else if(guess < 1)
    {
        alert("Please Enter a Number greater than 1")
    }
    else if(guess > 100)
    {
        alert("Please Enter Number smaller than 100")
    } // if entered number is valid
    else
    {
        prevGuess.push(guess)
        if(numGuess === 11) // if number of chances to guess is exceeded
        {
            displayGuess(guess)
            displayMessages(`Random Number was ${randomNumber}`)
            endGame()
        }
        else{ // if the guess is wrong, but has the chances
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // check is correct guess
    if(guess === randomNumber)
    {
        displayMessages("Your guess is Right");
        endGame();
    }
    else if(guess < randomNumber)
    {
        displayMessages("Your guess is smaller");
    }
    else if(guess > randomNumber)
    {
        displayMessages("Your guess is greater");
    }
}


function displayGuess(guess){
    // to update remaining values, clear input etc
    userInput.value = '';    // to clean input field
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;  // it will count our guesses
    remaining.innerHTML = `${11 - numGuess}`; // it will maintain remaining guesses
}

function displayMessages(message) // it will print given message
{
    lowOrhi.innerHTML = `<h1> ${message} </h1>`
}

function endGame()
{
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML =  `<h2 id="newGame"> Start new Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame()
{
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessages('')
        playGame = true
    })
}
