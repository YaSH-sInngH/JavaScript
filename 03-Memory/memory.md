### Memory in Javascript

##### Memory management in javascript is handled automatically by the runtime enviornmentm typically the javascript engine in web browser or Node.js.

#####  JavaScript uses a garbage collector to manage memory and ensure that developers do not need to manually allocate or deallocate memory.

JavaScript Engines has two places to store data.

1. `Stack`: 
- It is a data structure used to store static data. 
- Static data refers to data whose size is known by the engine during compile time.

In Stack, the copy of the original value is passed, any changes in copied value will not reflect on original value.

Example:
```js
let originalName = "Max"
let nickName = "Maxxy"
nickName="Nerd"
console.log(originalName, nickName)
// Output: Max Nerd
```

2. `Heap`:
- It is used to store objects and functions in JavaScript.
- The engine doesn’t allocate a fixed amount of memory. Instead, it allocates more space as required.

In Heap, the reference of original value is passed, any change in other variable will reflect in original value.

Example:
```js
let user1 = {
    name:"Max",
    age:21,
}
let user2 = user1
user2.age = 23
console.log(user1.age, user2.age)
// Output: 23 23
```

![Alt Text](/00-compiled-images/Screenshot%202024-10-30%20093337.png)

