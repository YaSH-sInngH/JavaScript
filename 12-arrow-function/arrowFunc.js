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