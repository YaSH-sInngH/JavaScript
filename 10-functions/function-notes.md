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

`Return Statement`: The return statement ends function execution and specifies a value to be returned to the function caller.

```js
function addTwoNumber(num1, num2){
    return num1 + num2;
}
const result = addTwoNumber(2,6);
console.log(result); // Output: 8
```

##### -::- Function as Object
```js
const user  = {
    name: "max",
    age: 21
}
function userInfoObject(anyObject){
    console.log(`${anyObject.name} is ${anyObject.age} years old.`);
}
userInfoObject(user);
```
We can directly pass the object in function as well.
```js
userInfoObject({
    name: "john",
    age:21
});
```

##### -::- Function as Array
Similary for Array as well
```js
const arr = [2,4,6,8];
function newArray(myArr){
    console.log(myArr[0], myArr[1]);
}
newArray(arr);
```
We can pass array directly into function as parameters as well.
```js
newArray([1,3,5,7]);
```

`Rest Operator` 
- The JavaScript Rest parameter allows a function to accept an indefinite number of arguments as an array.
- It is represented by three dots (…)
```js
function cart1(...num1){
    return num1
}
console.log(cart1(200,400,500,600));
// Ouput: [200,400,500,600]
```

`Function Expression`
- It is similar to a function declaration without the function name.
- Function expressions can be stored in a variable assignment. 
```js
const addOne = function(num){
    return num + 1;
}
console.log(addOne(3))
// Or
let result = addOne(4);
console.log(result);
```