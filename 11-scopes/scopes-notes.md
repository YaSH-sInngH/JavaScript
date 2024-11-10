### Scopes in Javascript
---

#### Block Scope

Before ES6 (2015), JavaScript variables had only <u><b>Global Scope</b></u> and <b><u>Function Scope</b></u>.

ES6 introduced two important new javascript keywords: <u><b>let</b></u> and <u><b>const</b></u>. 

These two keywords provide <u><b>Block Scope</b></u> in JavaScript.

- Variables declared inside a { } block cannot be accessed from outside the block

```js
{
    let x = 10;
    const y = 20;
}
// x and y can NOT be used here.
```

Variables declared with the `var` keyword can NOT have block scope.

- Variables declared inside a { } block can be accessed from outside the block.

```js
{
  var x = 2;
}
// x CAN be used here.
```

#### Global Scope

Variables declared globally (outside any function) have <u><b>Global Scope</b></u>.

<u><b>Global</u></b> variables can be accessed from anywhere in a JavaScript program.

Variables declared with <u><b>var , let</u></b> and <u><b>const</u></b> are quite similar when declared outside a block.

```js
let x = 50;
function printNum(){
  let x = 10;
  console.log(x);// Inside Block Scope or Local Scope
}
console.log(x);// This will refer to Global variable.
```

#### Function Scope

JavaScript has function scope: Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with <u><b>var, let</u></b> and <u><b>const</u></b> are quite similar when declared inside a function.

Nested Scope
```js
function A(){
    const username = 'max';
    function B(){
        const userage = 21;
        console.log(username);
    }
    B();
}
A();
```
- Above, there are two function with the name `A` and `B`.
- `A` has a variable and a function `B` within its scope. 
- `B` has another variable within its scope.
- `B` can access the variable of `A` because, as for `B` variable declared in `A` are global to it.
- 