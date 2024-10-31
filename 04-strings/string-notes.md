### Strings
---
- JavaScript String is a sequence of characters, typically used to represent text.
- It is enclosed in single or double quotes and supports various methods for text manipulation.

`String`: A sequence of characters enclosed in single (‘ ‘) or double (” “) quotes.

```js
// single quotes
console.log('Hello World');
// double quotes
console.log("Hello World");
```

`String Constructor`: The String() constructor creates String objects. When called as a function, it returns primitive values of type String.

```js
let name = new String('Max');
console.log(name);
```

`String Interpolation/Using Template Literals`:  Template literals allow you to embed expressions within backticks (`) for dynamic string creation, making it more readable and versatile.

```js
let name = 'Max';
console.log(`My name is ${name}`);
```

`Empty String`:You can create an empty string by assigning either single or double quotes with no characters in between.
```js
let str1 = '';
let str2 = "";
```

`Multiline String`:The backticks allows you to span the string across multiple lines, preserving the line breaks within the string.

```js
let multiline = `
    This is multiple
    line strings, that we can 
    create using backticks.
`;
```

#### Basic Operations Using String

- `length` It gives the length of the string.
```js
let name = 'Max';
console.log(name.length);
```

- `Concatention` It concatenates two or more strings.
```js
let name = 'Max';
console.log('My name is '+name);
```

- `Substring` It extracts some portion of string.
```js
let name = 'Max Turner';
console.log(name.substring(0,5));
```

- `Uppercase and Lowercase` It converts string into lowercase and uppercase.
```js
let name = 'Max';
console.log(name.toUpperCase());
console.log(name.toLowerCase());
```

- `replace` It replaces anything from the string.
```js
let n = 'Max Turner';
console.log(n.replace('Turner','Dan'));
```

- `Trim` It removes the whitespaces.
```js
let name = '   Max    ';
console.log(name.trim());
```