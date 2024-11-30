### JavaScript Execution Context
---

Execution context is the concept for describing the internal working of a code. 

In Javascript, the enviornment that enables the Javascript code to get executed is what we call <b>Javascript Execution Context</b>.

Types of Execution Context
- Global Execution Context/GEC
- Functional Execution Context/FEC
- Eval Execution Context

#### Global Execution Context
Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).

The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.

> For every JavaScript file, there can only be one GEC.

#### Function Execution Context
Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.

Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.

#### Eval Function Execution Context
Any JS code that gets executed within the eval function creates and holds its own execution context. 

However, the eval function is not used by the JavaScript developers, but it is a part of the Execution Context.

#### How are Execution Contexts Created?
The creation of an Execution Context (GEC or FEC) happens in two phases:

1. Creation Phase
2. Execution Phase

`Creation Phase`
- In this phase, the javascript engine creates the execution context.
- It compiles the code but does not execute the code.
- It determines the values of variables and functions and sets up the scope chain for the execution context.

`Execution Phase`
- In this phase, the JavaScript engine executes the code in execution context.
- It processes any statement or expression in the script and evaluates any function calls.


##### Let us take an example for the execution context.

```js
var n = 2;
function sqaure(num){
    var ans = num*num;
    return ans;
}
var square2 = square(n);
var square4 = sqaure(4);
```

![Understandable Execution Context](/00-compiled-images/Untitled-2024-10-30-0901.png)

Explanation:

```js
1. var n = 2;
2. function square(num){
3.    var ans = num*num;
4.    return ans;
5. }
6. var square2 = square(n);
7. var square4 = square(4);
```

`In Memory creation phase:` 
- n: undefined
- square: {.....} definition
- square2: undefined
- square4: undefined

`In Execution Phase:` 
- n: 2 (n is assigned as 2.)
- square: { This will create another execution context for itself. }
    - One at line 6: var square2 = square(2);
    - One at line 7: var square4 = square(4); 
- square2: 4
- square4: 16


### Call Stack
---
The call stack is a crucial concept in JavaScript’s runtime environment, representing the mechanism by which the JavaScript engine keeps track of function calls in a program.

It operates as a Last In, First Out (LIFO) data structure, meaning that the last function called is the first one to be resolved.

```js
function one(){
    console.log(1);
}
function two(){
    one();
}
two();
```

Look at image for clarification.

![Call Stack](/00-compiled-images/call_stack-img.png)