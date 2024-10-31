// in double quotes
console.log("I'm Max")

// in single quotes
console.log('I\'m Max')

// concatenation
let  name = 'Max'
let age = 21

console.log('My name is '+name + ' and age is '+age);

// in back-ticks
console.log(`My name is ${name} and I am ${age} years old.`);

const gameName = new String('Mine Craft')

console.log(gameName);
console.log(gameName[0]);
console.log(gameName[4]);// a space.

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newName = gameName.substring(0,4)// last value is not included
console.log(newName);

// const anotherName = gameName.slice(0,7)
const anotherName = gameName.slice(-8,7)// it starts from reverse
console.log(anotherName);

let ytChannel = "      MINGO        "
console.log(ytChannel);
console.log(ytChannel.trim());

// in browser https://max.com/maxxy Bingo
// the space will convert to %20.
const url = 'https://max.com/maxxy%20Bingo'

console.log(url.replace('%20', '-'));