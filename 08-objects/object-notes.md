### Objects
---

Objects in JavaScript are the most important data type and form the building blocks for modern JavaScript.

#### <u>Object</u>
- In JavaScript, an object is a collection of related data and functions, known as properties and methods, respectively. 
- Properties are “key: value” pairs that store data, while methods are functions associated with the object that can manipulate its properties.

> Note:- Object()  can be called with or without new. Both create a new object.

Objects can be created in two ways, by using literals or by using constructor.

By Using Object Literals.
```js
    let info = {
    name:"Max",
    age: 21,
    [symbol]: 'keys' 
}

// both will give the values in same manner.
console.log(info.name);
console.log(info["age"]);
```
`Inherited Properties`: JavaScript objects can inherit properties from their prototypes. These are known as inherited properties.

To check if a property is an object’s own property (not inherited), you can use the hasOwnProperty method.

```js
const obj = {
    name:"max",
    id: 1; 
}
console.log(obj.hasOwnProperty('name'));
// true - as it has name key or property
console.log(obj.hasOwnProperty('age'));
// false - as it doesn't have age key.
```

`Accessing Objects Members`: Object members can be accessed using two ways.
- using <u>dot notation</u>.
- using <u>bracket notaion</u>.

```js
let obj = {
    name: 'max'
}
console.log(obj.name);
console.log(obj['name']);
```
`Re-assigning Objext values`: We can re-assign values to the objects.

```js

const newObj = {
    name:"max"
}

newObj.name = "john";

console.log(newObj.name);
// john
```

- `Object.freeze()`- It freezes the object and, we can't re-assign the object properties again.


`Using constructor`: This way of creating object is also a way to create `singleton` objects.

```js
let user = new Object();
```

`Nesting in Objects`: Nesting in objects refers to having one or more objects inside another object. This allows you to organize related data in a hierarchical structure.
```js
let user2 = {
    fullname: {
        userfullname:{
            firstname: "Max",
            middlename: "",
            lastname: "Riddle"
        }
    },
    age:21,
}

console.log(user2.fullname);
console.log(user2.fullname.userfullname.firstname);
```

`Merging multiple objects`: In JavaScript, you can merge multiple objects using various techniques, such as Object.assign(), the spread operator (...).
- `By using Object.assign()`
```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

const merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged);
```
- `By using (...)spread operator`
```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

const merged = { ...obj1, ...obj2, ...obj3 };
console.log(merged);
```

`Destructing Objects`: Object destructuring is a JavaScript syntax that allows you to extract specific properties from an object and assign them to variables in a concise way. This can make your code more readable and reduce redundancy.

```js
const user = {
  name: "John",
  age: 30,
  location: "New York"
};

const { name, age } = user;

console.log(name); // "John"
console.log(age);  // 30
```

- `Renaming Variables`
```js
const { name: userName, age: userAge } = user;
console.log(userName); // "John"
console.log(userAge);  // 30
```