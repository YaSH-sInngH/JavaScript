### Numbers
---

`Numbers`: . JavaScript numbers are always stored in <u>double-precision 64-bit binary format IEEE 754</u>.

- 0-51 bits store the value(fraction)
- 52-62 bits store the exponents
- 63rd bits stores the sign

Look into the <u>maths.js</u> file, for more on numbers.

### Maths
---
- JavaScript Math object is used to perform mathematical operations on numbers. 
- All the properties of Math are static and unlike other objects, it does not have a constructor.

```js
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.7));
console.log(Math.min(2,5,7,9));
console.log(Math.max(2,5,7,9));
console.log(Math.sqrt(4));
```

- `Math.abs()` - to give absolute value
- `Math.round()` - it rounds off the decimal value.
- `Math.ceil()` - it gives the upper decimal rounded-off value.
- `Math.floor()`- it gives the lower decimal rounded-off value.
- `Math.min()` - It provides minimum value.
- `Math.max()` - It provides maximum value.
- `Math.sqrt()` - It gives the square root of given value.

*There are many more functions in Math which performs various other operations.*

`Math.random()`: It gves random values in range of (0-1).

```js
console.log(Math.random());

// to avoid 0, only output range is (1-9).
console.log(Math.floor(Math.random()*10)+1);
```
