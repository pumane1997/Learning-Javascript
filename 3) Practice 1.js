// Create a variable of type string and try to add a number to it.

let string_variable = 'string_variable'
let num = 10
console.log(string_variable + num)

// Data Type of above variable

console.log( typeof (string_variable + num))

// Create an object with const and try to change its value

const b = {
    name: 'Pratik',
    age: 28
}

//b = 10 - > fails

//Q4

b['friend'] = 'Indrajeet'

console.log(b)

// Q5

const dict = {
    word1: 'meaning1',
    word2: 'meaning2',
    word3: 'meaning3',
    word4: 'meaning4',
    word5: 'meaning5'
}

console.log(dict.word1)
console.log(dict['word1'])