const myArr = [0,1,2,3,4,5];
const myArr2 = ['max', 'john', 'robert'];
console.log(myArr[2]);
console.log(myArr2[0]);
const myArr3 = new Array(1,2,4,5,6);
console.log(myArr3.length);

// Array Methods
myArr.push(6,7,8,9);
myArr2.push('Tom', 'Ben', 'Sam');
console.log(myArr);
console.log(myArr2);
myArr2.pop();
console.log(myArr2);

// myArr.unshift(0);
myArr.shift();
console.log(myArr);

// it returns the boolean value to the value present or not 
console.log(myArr.includes(0));
// it returns the index of the given value
console.log(myArr.indexOf(3));

const newArr = myArr.join();

console.log(myArr);
console.log(typeof newArr);

const myArr5 = [1,2,3,4,5,6,7];

const myNewArr1 = myArr5.slice(1,4);
console.log(myNewArr1);

const myNewArr2 = myArr5.splice(1,4);
console.log(myNewArr2);