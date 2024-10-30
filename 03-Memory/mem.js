// Stack Memory(Primitive)
let myName = "Max"
let nickName = myName
console.log(nickName);
// if we change the name in nickName, change will occur in nickName only as we have passed the copy of original value of myName.

nickName = "John"
console.log(nickName, myName);


// Heap (Non-primitive)
let user1 = {
    userName: "Max",
    userAge: 21,
}
let user2 = user1
// In this we have passed the reference of original value in user1 to user2.
// Any change occurs in user2 will reflect in user1 as well because, we have passed the reference of original value.

user2.age = 23;
console.log(user1.age, user2.age);
