let user = {
    username:'max',
    age:  21,
    useremail: 'max@gmail.com',
    firstMessage: function(){
        // console.log(`Welcome, ${this.username}`);
        // console.log(this);
    }
}

// Here, the context for username is same
user.firstMessage();
// But, here we have changed the username.
// The context has been changed and we are referencing to that object by using this keyword.
user.username = 'john';
user.firstMessage();

// current context.
// console.log(this);


// Inside some function
function info(){
    let username = 'max';
    console.log(this);
    console.log(this.username); // undefined
}
// info();

// ARROW Function
let userInfo = () => {
    let username = 'max';
    console.log(this);
    console.log(this.username);
}
userInfo();


// Implicit Return
// This type of using arrow function is also knwon as Implicit Return.
// But we can do it directly as well only by using simple () braces.
// We dont have to return anything.

const addOne = (num1,num2) => (num1+num2);
// OR
const addTwo = (num1,num2) => (num1+num2);
// Object return in arrow function.
const addThree = (num1,num2) => ({name:"max"});
// console.log(addTwo(3,4));
// console.log(addThree(3,4));