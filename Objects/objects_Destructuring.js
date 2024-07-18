
const course = {
    coursename : "js in hindi",
    price : 999,
    courseInstructor: "hitesh"
}
// console.log(course["price"])
// const {courseInstructor} = course // one
// const {courseInstructor, price} = price // multiple
const {courseInstructor : inc, price: pc} = course // use aliass name 
console.log(inc, pc);


[
    {},
    {},
    {}
]

