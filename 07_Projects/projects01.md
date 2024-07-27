# projects related to DOM

## [Project link ](https://stackblitz.com/edit/dom-project-chaiaurcode?file=2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html)


# Solution code

## Project 1 Solution Color Changer 🔥

``` Javascript
console.log("Bhushan")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(e){
       console.log(e)
       console.log(e.target)
       if(e.target.id==='grey'){
         document.body.style.backgroundColor = e.target.id
       }
       if(e.target.id==='white'){
        document.body.style.backgroundColor = e.target.id
      }
      if(e.target.id==='blue'){
        document.body.style.backgroundColor = e.target.id
      }
      if(e.target.id==='yellow'){
        document.body.style.backgroundColor = e.target.id
      }
      if(e.target.id==='purple'){
        document.body.style.backgroundColor = e.target.id
      }
    })
    
});
```

## Project 2 Solution  BMI Generator ☕

``` javascript
 const form = document.querySelector('form')

 form.addEventListener('submit',function(e){
      e.preventDefault()
      const height = parseInt(document.querySelector('#height').value)
      const weight = parseInt(document.querySelector('#weight').value)

      const results = document.querySelector('#results')

      if(height ==='' || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
      }
      else if(weight ==='' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
      }
      else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML = `<h1>The BMI of <span>${bmi}</span></h1>`
      }
 

 })
```
## Project 3 Solution 

``` javascript

const clock = document.querySelector('#clock')

setInterval(()=>{
  let date = new Date()
  const dateTime = date.toLocaleTimeString();
  clock.innerHTML = dateTime
},1000)

```

## Project 4 SOlution Guess Number 😍

``` javascript

    let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess)
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('enter the number is more than 1');
  } else if (guess > 100) {
    alert('Please enter a number is less than 100');
  } else {
    prevGuess.push(guess);
    if (prevGuess.length > 10) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guess it right ');
    endGame();
    // playGame = false;
    return playGame;
  } else if (guess < randomNumber) {
    displayMessage(`Number is TODO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TODO High`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}   `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game </h2>`;
  startOver.appendChild(p);
  // playGame = false;
  newGame();
}
function newGame(){
  document.querySelector(' ')
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
      randomNumber = parseInt(Math.random() * 100 +1);
      prevGuess = []
      numGuess = 1 
      guessSlot.innerHTML = ''
      remaining.innerHTML = `${11- numGuess}`;
      userInput.removeAttribute('disabled')
      startOver.removeAttribute('disabled')
      startOver.removeChild(p)

      playGame = true; 


    })

}

```
