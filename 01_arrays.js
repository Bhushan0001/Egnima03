// const myArr = [0,1,2,3,4,5]
// console.log(myArr)

// const myHeoros =["shaktiman", "naagraj"]

// const myArr2 = new Array(1,2,3,4)
// // console.log(myArr2[1])
// myArr2.push(6)
// console.log(myArr2)
// myArr2.pop()
// console.log(myArr2)
// myArr2.unshift(2)
// console.log(myArr2)
// console.log("shifting the element array")
// myArr.shift()
// console.log(myArr2)

// Difference between slice & splice 

const myArr1 = [1,2,3,4,5,6];

const newArray = myArr1.slice(1,3);
console.log(myArr1)
console.log(newArray)

const newarray2 = myArr1.splice(1,3);
console.log(newarray2)
console.log(myArr1)


// merge two array
const marvel_heros = ['thor', 'Ironman', 'spiderman']
const dc_heros = ['superman', 'flash','batman']
// marvel_heros.push(dc_heros)
// console.log(marvel_heros.concat(dc_heros))
const allnewarrat = marvel_heros.concat(dc_heros)

// console.log(allnewarrat)

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros)