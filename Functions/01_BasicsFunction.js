
function sayMyName(){
console.log("B")
console.log("H")
console.log("U")
console.log("S")
console.log("H")
console.log("A")
console.log("N")
}


// sayMyName()
// sayMyName()


// Rest Operator 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username : "hitesh",
    price :199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price }`)
}
// handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray
}

console.log(returnSecondValue(myNewArray))
