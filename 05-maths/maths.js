// NUMBER
// simple number
const num1 =  23;
console.log(num1);

// number as object
const num2 = new Number(100);
console.log(num2);
console.log(num2.toString());
console.log(num2.toString().length);
console.log(num2.toFixed(5));

// decimal number
const decNum = 23.23;
console.log(typeof num1);
console.log(decNum.toPrecision(3));

const amount = 100000000;
console.log(amount.toLocaleString());
console.log(amount.toLocaleString('en'));
console.log(amount.toLocaleString('en-IN'));

// MATHS

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.7));
console.log(Math.min(2,5,7,9));
console.log(Math.max(2,5,7,9));
console.log(Math.sqrt(4));

// gives random values between (0-1)
console.log(Math.random());

// to avoid 0, only output range is (1-9).
console.log(Math.floor(Math.random()*10)+1);

// 4 digit random number
const a = 1000;
const b = 10000;

console.log(Math.floor(Math.random() * (b - a + 1) + a));  