### Control Flow / Conditional Statements
--- 
Control flow is the order in which the JavaScript interpreter executes statements.

Conditional statements determine whether code should be executed based on one or more conditions. A conditional statement executes the code it contains if the associated condition (or set of conditions) evaluates to `true`. Otherwise, the code is skipped.

#### if....else
- An `if` statement evaluates a condition inside the matched parentheses that follow. 
- If the condition inside the parentheses evaluates to `true`, the statement or block statement that follows the matched parentheses is executed:

```js
if ( true ) console.log( "True." );
> "True."

if ( true ) {
    const myString = "True.";
    console.log( myString );
}
> "True."
```
If the condition inside the parentheses evaluates to `false`, the statement that follows it is ignored:

```js
if ( false ) console.log( "True." );
```

An `else` keyword immediately following an `if` statement and its conditionally-executed statement specifies the statement to be executed if the `if` condition evaluates to `false`:

```js
if ( false ) console.log( "True." )''
else console.log( "False" );
> "False."
```

#### Ternary operator
The ternary operator (more accurately but less commonly called the ternary conditional operator) is shorthand used to conditionally execute an expression. 
- A condition to be evaluated, followed by a question mark (`?`).
- The expression to execute if the condition evaluates to true, followed by a colon (`:`).
- The expression to execute if the condition evaluates to `false`.

```js
const myFirstResult  = true  ? "First value." : "Second value.";
const mySecondResult = false ? "First value." : "Second value.";

myFirstResult;
> "First value."

mySecondResult;
> "Second value."
```

#### Switch Case
Use the `switch` statement to compare the value of an expression to a list of potential values defined using one or more `case` keywords.

```js
const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log('Default Case');
        break;
}
```

#### Truthy Values
- In JavaScript, a <b>truthy</b> value is a value that is considered true when encountered in a Boolean context.

- All values are truthy unless they are defined as <b>falsy</b>.

- `Truthy Values`: 
    - `true`
    - `[]`
    - `{}`
    - `"0"`
    - `function(){}`
    - `"false"`
    - `new Date()`

- `Falsy Values`: That is, all values are truthy except 
    - `false`
    - `0`
    - `-0`
    -  `0n`
    - `""`
    - `null`
    - `undefined` 
    - `NaN`
    - `document.all`.

#### Nullish Coalescing Operator
The nullish coalescing `(??)` operator is a logical operator that returns its right-hand side operand when its left-hand side operand is <u>`null`</u> or <u>`undefined`</u>, and otherwise returns its left-hand side operand.

```js
let val1;
val1 = 5 ?? 10;
console.log(val1);
> Output: 5

let val2;
val2 = null ?? 10;
console.log(val2);
> Output: 10

let val3;
val3 = undefined ?? 10;
console.log(val3);
> Output: 15

```