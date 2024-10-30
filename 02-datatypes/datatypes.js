// Primitive Datatypes

let name = "Max";
let age = 21;
let cgpa = 9.1;
let isEligible = true;
let b = null;
let c;

console.log(typeof name);   //string
console.log(typeof age);    //number
console.log(typeof cgpa);   //number
console.log(typeof isEligible); //boolean
console.log(typeof b);  //object
console.log(typeof c);  //undefined

// bigint
const bigNumber = 1234234112323423423454n;
console.log(typeof bigNumber);

// both id1 and id2 are looking same but not the same.
const id1 = Symbol('123');
const id2 = Symbol('123');

console.log(id1 === id2);
console.log(typeof id1);

// Non-Primitive or Reference datatypes

// Objects, Arrays, Funcitons

const langArray = ["Java", "C++", "C#"];

const myObject = {
    name:"Max",
    age: 21,
}

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof langArray);
console.log(typeof myObject);
console.log(typeof myFunction);
