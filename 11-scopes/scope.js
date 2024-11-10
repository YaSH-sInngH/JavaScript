// Global Scoped Variables 
let a = 10; 
const b = 20;
var c = 30;

if(true){
    //  This cannot be used again with same name after once declared globally.
    // let a = 20; 
    // const b = 30;
    var c = 10;// this will chage the value of c which is not sustainable for good coding practices.
}

// Nested Scope
function A(){
    const username = 'max';
    function B(){
        const userage = 21;
        console.log(username);
    }
    B();
}
A();

// Hoisting 

// Here, we can access the fucntion returned value before even declariing the function.
console.log(addOne(4));
function addOne(num){
    return num + 1;
}

// Here, we cannot access the returned value of function.
// As it is declared in variable and we can't access it before declaring it first.
console.log(addTwo(4));
let addTwo = function(num){
    return num + 2;
}
// So, this is called hoisting in javascript.