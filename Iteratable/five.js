const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach(function (val){
//     console.log(val)
// })

// coding.forEach( (val)=>{
//     console.log(val)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item , index , arr)=>{
//     console.log(item, index, arr)
// })

// const myCoding = [
//     {
//         languageName : "javascript", 
//         languageFileName : "js"
//     },
//     {
//         languageName : "java", 
//         languageFileName : "java"
//     },
//     {
//         languageName : "python", 
//         languageFileName : "py"
//     }
// ]

// myCoding.forEach( (val) => {
//     console.log(`${val["languageFileName"]} := ${val.languageFileName} `)
// } )


coding.forEach((item) =>{
    console.log(item)
})

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
   const nums = myNums.filter( (num) =>{
   return  num>4
   } )
//    console.log(nums)

   const newNums = []
   myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
   })

//    console.log(newNums)