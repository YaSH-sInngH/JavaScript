### Functions
---
A function in javascript is a reusable block of code that performs a specific task.
> A JavaScript function runs when it is “called” by some part of your code.

`Function Definition`
- JavaScript functions are defined with the function keyword. 
- A function definition is sometimes also termed a function declaration or function statement.
- Below are the rules to create a function in javascript.
    - Every function should begin with the keyword function followed by,
    - A user-defined function name that should be unique,
    - A list of parameters enclosed within parentheses and separated by commas,
    - A list of statements composing the body of the function enclosed within curly braces { }.
```js
// Function Definition
function printName(){
    console.log("Hello Max");
}
// Function Invocation
printName();
```
`Function Declaration`: It declares a function with a function keyword. The function declaration must have a function name.

```js
function addTwoNumber(num1, num2){
    return num1 + num2;
}
const result = addTwoNumber(2,6);
console.log(result); // Output: 8
```

