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

Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:

```js
const addTwoNumbers = (a, b) => {
    return a+b;
};
```

Arrow Functions Return Value by Default.

It is also known as Implicit return.
```js
 const addTwoNumber = (a,b) => (a+b);
```

##### The handling of `this` is also different in arrow functions compared to regular functions.

##### In short, with arrow functions there are no binding of `this`.

##### In regular functions the `this` keyword represented the object that called the function, which could be the window, the document, a button or whatever.

##### With arrow functions the `this` keyword always represents the object that defined the arrow function.

<b><u>Inside normal function</u></b>

```js
function info(){
    let username = 'max';
    console.log(this);
    console.log(this.username); // undefined
}
info();
```

``` 
Output Inside console or terminal is:

 Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 43.01040000002831,
      nodeStart: 3.08669999986887,
      v8Start: 7.540000000037253,
      bootstrapComplete: 30.16760000027716,
      environment: 16.181200000457466,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1731755276081.866
  },
  fetch: [AsyncFunction: fetch]
}
undefined
```

<b><u>Inside arrow function</u></b>

```js
let userInfo = () => {
    let username = 'max';
    console.log(this);
    console.log(this.username);
}
userInfo();
```

```
Output Inside console or terminal is:
{}
undefined
```

---

#### Immediately Invoked Fucntion Expression

- An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
- An IIFE is a function in JavaScript that runs as soon as it's called or invoked in the event loop. It's a programming language idiom that uses function scoping to create a lexical scope.

Syntax:
```js
(function (){ 
// Function Logic Here. 
})();
```

Normal Function Invoaction
```js
// Normal Function Invocation
function info(){
    console.log('Information sent successfully');
}
info();
```

IIFE
```js
(function dataInfo(){
    console.log('Data Information sent successfully');
})();
```

> NOTE: Immediately Invoked Fucntion Exspression should always be ended or close with a semicolon `;`. As it doesn't know when to end the IIFE once invoked.