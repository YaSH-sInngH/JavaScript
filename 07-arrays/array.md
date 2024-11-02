### Arrays
---

- An array in JavaScript is a data structure used to store multiple values in a single variable.
- It can hold various data types and allows for dynamic resizing.
- Elements are accessed by their index, starting from 0.

There are two ways to create JavaScript Arrays: 
- Using the Array constructor
- Using the shorthand array literal syntax

- JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

    - `Shallow Copy`: 
         A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 

         As a result, when you change either the source or the copy, you may also cause the other object to change too. 

         That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.  
    - `Deep Copy`: 
        A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
    
        As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. 
    
        That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.

Create an Array
```js
let myArr = [1,2,3,4];
let myArr = ['max', 'john'];
```

Creating an Array as object constructor
```js
const myArr = new Array(1,2,3,4,5);
```

- `push()` - to add an element in array;
- `pop()` - to remove the last element in an array;
- `unshift()` - It adds one or more elements to the beginning of an array.
- `shift()` - It removes the first indexed element in array.
- `join()` - The join() method returns an array as a string.
- `slice` - The Array slice() method returns selected elements in an array as a new array. 
    ```
    arr.slice(begin, end);
    begin index is included.
    end index is not included.
    ```
- `splice` - Array splice() Method is an inbuilt method in JavaScript that is used to change the contents of an array by removing or replacing existing elements and/or adding new elements.
    ```
    Array.splice( index, remove_count, item_list )
    ```