// const tinderUser = new Object()// this is singleton object
const tinderUser = {} // this not singleton object
// console.log(tinderUser)

tinderUser.id = 12345
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname :{
            firstname : "Bhushan",
            lastname : "Harpade"
        } 
    }

}

// console.log(regularUser.fullname)

const obj1 = {1:"a", 2:"b" }
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)

// console.log(obj3)

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // Expected output: true


// spread objects

const obj3 = {...obj1,...obj2}
// console.log(obj3)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
