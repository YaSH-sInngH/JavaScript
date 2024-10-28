## Variables in Javascript
---

- `const Variable`: It is used to declare the variables that cannot be reassigned.

``` js
const accountId = 12345;
console.log(accountId);
```

- `let Variable`: The let is block-scoped variable. It may change it's variable values later in the code. 

``` js
let x = 10;
console.log(x);
```

- `var Variable` The var is use to declare variables. It is a function scoped or globally scoped variable. 

``` js
let x = 10;
console.log(x);
```

> IMPORTANT NOTE: `var` keyword is not preffered now in javascript, because if the variable is declared in another block with the same name, it will cause issues.
>> The variable in other block with same name is not scoped to that particular block, instead it is scoped globally, and change the value for all javascript code.

- `Implicit global variable declaration / Assignment wothout declaration`: In this we assign values witout declaring, it is a bad practice in javascript, as it will also scoped globally.
```js
name = "Max";
console.log(name);
```