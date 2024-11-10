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

