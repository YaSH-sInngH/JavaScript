let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());

let createdDate = new Date(2024, 10, 20);
console.log(createdDate.toDateString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(createdDate.getTime());

console.log(Math.floor(Date.now()/1000));

const newDate = new Date();

newDate.toLocaleString('default',{
    weekday: 'long',
})