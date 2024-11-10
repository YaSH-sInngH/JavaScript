// rest operator
function cart1(...num1){
    return num1
}
function cart2(val1, val2, ...num1){
    return num1
}
console.log(cart1(200,400,500,600));
console.log(cart2(200,400,500,600));

const user  = {
    name: "max",
    age: 21
}
function userInfoObject(anyObject){
    console.log(`${anyObject.name} is ${anyObject.age} years old.`);
}
// userInfoObject(user);
// we can directly pass the object in function as well.
userInfoObject({
    name: "john",
    age:21
});

// Similarly for array as well
const arr = [2,4,6,8];
function newArray(myArr){
    console.log(myArr[0], myArr[1]);
}
// newArray(arr);
// We can pass array directly into function as parameters as well.
newArray([1,3,5,7]);

// Function Expression 
// function is stored inside a variable
let addOne = function(num){
    return num + 1;
}
console.log(addOne(4));