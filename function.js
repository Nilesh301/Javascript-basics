// Non primitive => Array, Objects, Function
// Function defination
function sayHi(param) {
    // console.log("Hello From sayHi");
    // console.log("param received",param);
    let rVal = Math.random() > 0.5 ? true : "less then 0.5";
    return rVal;
}
// sayHi(10);
// sayHi("Hello");
let rVal = sayHi([1,2,3,4,5]);
console.log("rval",rVal);