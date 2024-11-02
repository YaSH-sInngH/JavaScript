### Date and Time
---

#### <u>Date</u>
- Javascript Date object represents a single moment in time in a platform-independent format.
- Date object encapsulates an integral number that represents  milliseconds since the midnight at beginning of `January 1, 1970, UTC`.

Creating a date object. 
```js
const myDate = new Date()
```
There are 9 ways to create date object.

    new Date()
    new Date(date string)

    new Date(year,month)
    new Date(year,month,day)
    new Date(year,month,day,hours)
    new Date(year,month,day,hours,minutes)
    new Date(year,month,day,hours,minutes,seconds)
    new Date(year,month,day,hours,minutes,seconds,ms)

    new Date(milliseconds)

Javascript Date object provides many operations which we can perform in various ways.

| Component       | Local                     |                     | UTC                          |                     |
|-----------------|---------------------------|---------------------|------------------------------|---------------------|
|                 | **Get**                   | **Set**            | **Get**                      | **Set**            |
| **Year**        | [getFullYear()](#)        | [setFullYear()](#) | [getUTCFullYear()](#)        | [setUTCFullYear()](#) |
| **Month**       | [getMonth()](#)           | [setMonth()](#)    | [getUTCMonth()](#)           | [setUTCMonth()](#) |
| **Date (of month)** | [getDate()](#)        | [setDate()](#)     | [getUTCDate()](#)            | [setUTCDate()](#)  |
| **Hours**       | [getHours()](#)           | [setHours()](#)    | [getUTCHours()](#)           | [setUTCHours()](#) |
| **Minutes**     | [getMinutes()](#)         | [setMinutes()](#)  | [getUTCMinutes()](#)         | [setUTCMinutes()](#) |
| **Seconds**     | [getSeconds()](#)         | [setSeconds()](#)  | [getUTCSeconds()](#)         | [setUTCSeconds()](#) |
| **Milliseconds**| [getMilliseconds()](#)    | [setMilliseconds()](#) | [getUTCMilliseconds()](#) | [setUTCMilliseconds()](#) |
| **Day (of week)** | [getDay()](#)           | N/A                | [getUTCDay()](#)             | N/A                |
