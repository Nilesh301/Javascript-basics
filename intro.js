//How to print in js
//console.log("Hello JS :)");
// declare variable
// undefined
// JS only tells you that it is only a variable
// let a ;
// a = 10;
// a = 10.1;
// a = "Hello i am string";
// a = null
// a = true
// console.log(a);
// variable types :- primitive types : number, string, boolean, null

// JS is similar to Java,c++,c
// let number = 10;
// for (let i = 1; i <= number; i++){
//     console.log(" Number is ",i);
// }

// is prime
let number = 23;
let flag = true;
for(let div = 2; div < number; div++){
    if (number % div == 0) {
        flag = false;
        break;
    }
}

if (flag == true) {
    console.log(number, "is prime");
}else{
    console.log(number,"is not prime");
}







