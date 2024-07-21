const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce ( (acc, curr) => acc + curr , 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course", 
        price : 32999
    },
    {
        itemName: "py course", 
        price : 24999
    },
    {
        itemName: "mobile dev course", 
        price : 32999
    },
    {
        itemName: "data sci course", 
        price : 2999
    }
]

const priceTopay = shoppingCart.reduce( (acc, item)=> acc + item.price,0)
console.log(priceTopay)