const mc = ['thor', 'dr.strange', 'ironman'];
const dc = ['superman', 'batman', 'joker'];

// it will push all the dc elements in mc as an whole array.
// mc.push(dc);
// console.log(mc);
// Output: [ 'thor', 'dr.strange', 'ironman', [ 'superman', 'batman', 'joker' ] ]

// this will add all the elements as expected.
// const allHeros = mc.concat(dc);
// console.log(allHeros);
// Ouput: [ 'thor', 'dr.strange', 'ironman', 'superman', 'batman', 'joker' ]

const allNewHeros = [...mc, ...dc];
// console.log(allNewHeros);

const num = [1,2,3,4,5,[6,7,8,[7,8,9]],9,2,3,6,[1,2,3,7,6]];
const newNum = num.flat(Infinity);
// console.log(newNum);

console.log(Array.isArray('max'));
console.log(Array.from('max'));
console.log(Array.from({name:'max'}));

let a = 10;
let b = 20;
let c = 30;
console.log(Array.of(a,b,c));
