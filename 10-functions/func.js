function printName(){
    console.log("Hello Max");
}
// printName --> It is refernce

// Function invocation
printName(); // it has been invoked.

// num1 and num2 are parameters
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

addTwoNumbers();// without arguments
addTwoNumbers(6,4);// with arguments
addTwoNumbers(3,'4');
addTwoNumbers(3,'a');
addTwoNumbers(3,null);

function addTwoNumber(num1, num2){
    return num1 + num2;
}
const res = addTwoNumber(9,1);
console.log(res);

function userLoggedIn(username){
    // 1st Way
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     // it will return nothing
    //     return         
    // }
    // return `${username} just logged in`;

    // 2nd Way
    // if(!username){
    //     console.log("Please enter a username");
    //     // it will return nothing
    //     return         
    // }
    // return `${username} just logged in`;

    // 3rd Way
    if(username){
        return `${username} just logged in`
    }
    return "Please enter username";
}
// console.log(userLoggedIn("Max"));
console.log(userLoggedIn());// undefined as nothing is passed as parameter
