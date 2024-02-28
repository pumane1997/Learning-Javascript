var b = "Pratik";
{
    var b = "This"
    console.log(b)
}
console.log(b)

// var is globally scoped while let & const are block scoped

var c = "Pratik";
{
    let c = "This"
    console.log(c)
}
console.log(c)

// var can be updated and re-declared within its scope
// let can be updated but not re-declared
// const can neither bu updated or re-declared

// use let and const prominently 

// var can be declared undefined where as let and const cannot
