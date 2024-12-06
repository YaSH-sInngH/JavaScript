// Control Flow

// If
/*
if(true){
    console.log("Hello")
}
if(false){
    console.log("Bye");
}
*/

let a = 2;
if(a == 2){
    console.log("It is eqaul.");
}

// <,>,<=,>=,!=,==,===,!==
// &&(AND), ||(OR)

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log('Default Case');
        break;
}

// Nullish Coalescing Operator
let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;

console.log(val1);
