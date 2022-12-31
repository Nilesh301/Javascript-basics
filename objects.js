// object -> group of key : value pair
// key : value -. property
//key : function -> method 
let cap = {
    name: "Steve",
    lastName: "Rogers",
    address: {
        city : "Manhatten",
        state : "New York"
    },
    age : 35,
    isAvengers:true,
    movies:["First Avenger", "Winter soldier","civil war"],
    sayHi:function(){
        console.log("Cap says Hi");

    }

};
//Get
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[1]);
// cap.sayHi();
// set/ update
// console.log("cap :",cap);
// cap.age = 36;
// cap.isAvengers = false;
// cap.friends=["Tony","Bruce","Peter"];
// console.log(`'''''''''''''''''''''''''''''''`);
//How to delete element in an object
//delete cap.address
//console.log("cap :",cap);
// for (let key in cap) {
//     console.log(key," : ", cap[key]); 
// }
// let propkey = "age";
// console.log(cap.age);
// console.log(cap[propkey]);
// console.log(cap["age"]);
console.log(cap.xyz);