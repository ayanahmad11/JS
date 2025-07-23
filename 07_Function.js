// 
greet();

function greet(){
        console.log("Hi there");
    
}    
// function declaration and function expression

// 1> In function declarations, the function is hoisted to the
//    the top of the code, meaning you can call it before 
//    it is defined.

// 2> A function expression assigns a function to a variable.
//    It not hoisted , so you can only call it after the function 
//    is defined.

let myFunc = function okay(){
        console.log("Hi there")
}
// okay() //  error

myFunc();

//? Hoisting 

function greeting(name){
    console.log(`Hi,${name}`)
}
greeting("Lakshya")

function adder(a,b = 0){ // default paramter as b = 0
    console.log(a);
    console.log(b);
    return a+b;
}
let totalSum = adder(10,20);    
console.log(totalSum);

setTimeout(function(name){
    console.log("Hi there")
},2000);    