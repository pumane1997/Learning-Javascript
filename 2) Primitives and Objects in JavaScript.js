// nn bb ss u  -> primitive data types

let a = null;
let b = 298;
let c = true;
let d = BigInt('123')
let e = 'Pratik'
let f = Symbol('This is a symbol')
let g = undefined // let g -- does not need to be defined explicitly


console.log(a,b,c,d,e,f,g)
console.log(typeof d)

// Objects in JS -> These are key-value pairs (Like dict in python)

const Pratik = {
    "Age":28,
    "Profession": "Data Engineer",
    xyz: 12
}

console.log(Pratik['Age'])