### This keyword
---
- In JavaScript, `this` keyword refers to the object that is currently executing a function or method.
- Its value is determined by how a function is called.
- `this` typically represents the context in which a function operates, allowing access to the properties and methods of its containing object.
- In JavaScript, this keyword refers to the current object in context. 
- Its value depends on how it’s used: in methods, it refers to the object; in global scope, it refers to the global object.

 ```js
//  In node enviornment
 console.log(this);
 // empty object{}
 ```
Inside browser if `console.log(this)` will be executed, it will generate a <b><u>window object</b></u>.

 > In Node enviornment `this` keyword refers as module scope, which is for that particular module or file, whereas in javascript `this` also refered as global object but it is also a window object.

#### 1. Regular Function (info)
```js
function info(){
    let username = 'max';
    console.log(this);// global/window object
    console.log(this.username); // undefined
}
info();
```
In a regular function like `info`, the value of this depends on how the function is called:
 - If you call `info()` in the global scope (e.g., outside of any object or class), `this` will refer to the global object (`window` in browsers, `global` in Node).
 - Inside info, this.username is undefined because username is a local variable within the function's scope, not a property of the global object or this.
 - Therefore, when you log this.username, you get undefined.


#### 2. Arrow Function (userInfo)
```js
// ARROW Function
let userInfo = () => {
    let username = 'max';
    console.log(this);// empty object
    console.log(this.username);// undefined
}
userInfo();
```
In an arrow function like `userInfo`, `this` behaves differently:
- Arrow functions do not have their own `this` context. Instead, they inherit `this` from the lexical scope in which they were defined (where the function was created).
- If you define `userInfo` at the top level, `this` will refer to the global object. However, in <b>strict mode</b> (default in modules), `this` inside an arrow function defined in the global scope will be `undefined`.
- Similar to the regular function, `username` is a local variable, so `this.username` will also be `undefined`.

##### Summary
- `Regular function` (`info`): this depends on the invocation context.
- `Arrow function` (`userInfo`): this is lexically bound to the scope where it was defined.
- Both will print undefined for this.username because username is just a local variable, not a property on this.


### Arrow Function
---