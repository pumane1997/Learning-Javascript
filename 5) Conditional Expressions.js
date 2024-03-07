//node "5) Conditional Expressions.js"

let a = "45"

console.log(typeof a)

a = Number.parseInt(a)

console.log(typeof a)

if (a<0){
    console.log("This age is invalid")
}
else if(a<9){
    console.log("You are a kid")
}
else if(a>9 && a<18){
    console.log("Teen")
}
else{
    console.log("You can drive")
}


console.log("You can", a<18? "not drive": "drive")