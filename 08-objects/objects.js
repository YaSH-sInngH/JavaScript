// Object Literals

const symbol = Symbol('key1');

let info = {
    name:"Max",
    age: 21,
    [symbol]: 'keys' 
}
console.log(info.hasOwnProperty('name'));


console.log(info);
console.log(info.age);
console.log(info.name);

console.log(info['name']);
console.log(info['age']);

// objects properties,
info.name = "John";
console.log(info);
    // Object.freeze(info);
// once the object is freezed, nothing will change.
info.name = "max"
console.log(info)

info.display = ()=>{
    console.log("Hello");
}

console.log(info['name']);
console.log(info.display);

// By using Constructor

// this is a singleton object.
let user = new Object();

// this is a non-singleton object.
let user1 = {};

console.log(user);
console.log(user1);

// nesting in objects
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

// merging multiple objects
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd', 5:'e'}

// Same problem will occur like in array.
// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign( obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

// sometimes data will come from databases in the form of array of objects.
// array of objects

const users = [
    {
        id:1,
        name:"max"
    },
    {
        id:2,
        name:"meg"
    },
    {
        id:3,
        name:"john"
    },
    {
        id:4,
        name:"peter"
    },
]

// we can use this array of objects by using loops.

console.log(users[0].id,users[1].id,users[2].id,users[3].id);
console.log(users[0].name,users[1].name,users[2].name,users[3].name);


// by using this we are storing keys in the form of arrays
console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));