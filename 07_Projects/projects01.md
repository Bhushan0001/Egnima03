# projects related to DOM

## [Project link ](https://stackblitz.com/edit/dom-project-chaiaurcode?file=2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html)


# Solution code

## Project 1 Solution

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

## Project 2 Solution

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