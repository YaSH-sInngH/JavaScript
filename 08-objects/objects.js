// Object Literals

const symbol = Symbol('key1');

let info = {
    name:"Max",
    age: 21,
    [symbol]: 'keys' 
}

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
