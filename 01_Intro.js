//? Js  `mocha `Livescript `Ecmascript6 (2015)
//* Js is the language that powers the web
//* It adds interactivity , logic, and 
//* dynamic features to our website.

//* node -v

// client side js 
// server side js 


//? Basic JavaScript Syntax
//1> js statement
console.log("Hi"); 

//2. Case Sensitive - js is a case sensitive language
let age = 10;
let AGE = 20;

console.log(age); 
console.log(AGE); 

//3> Comments 
// single line comments
/* multi line comments */ 

//4> White space and indentation
// we can write complete code in one single line

//?  Variables in JS
//*  1> let  - can change values
let myName = "ayan";
console.log(myName);

myName  = "ahmed"
myName[2] = 'i'; // cannot change!
console.log(myName);

//* 2> const - can not change
const pi = 3.14;
console.log(pi);
// pi = 3.145; // throws an error
// console.log(pi);

//* 3> var - old school 



//?  Variable naming
// must start with   _ , $  or camel casing
// can contain letters , numbers  ,$ ,_ , but no spaces
// use camel Casing for multiple word variable names like userAge 

//?  DATA TYPES in JS
// 1> primitive data types
// 2> non - primitive datatypes

//*  7 - primitive data types - 
/*
*1. Strings
Strings are enclosed in quotes (single , double or backticks `)

*2. Numbers 
Numbers in js can be both integers and floating point (decimal)
values . Every thing either real or decimal is just a number in js.

*3. Booleans
Booleans represents logic values, which can either be true or false.
They are typically used in conditions and comparisons

*4. Undefined
is the default value assigned to a variable that has been
delared but not yet assigned  a value.

*5. Null
is an intentional absence of any object value.
Unlike "undefined", which means not yet assigned 
null is used to explicitly represent "no value".

? think of null as "I know there's nothing in here" and
* undefined as " I don't know what this is yet"


6. Symbol - Introduced in Es6 , used for identifiers

7. BigInt (used for very large integers)

*/

/*
TODO: Non-primitive (Reference)  datatypes
?1. Objects
    Objects in js are collections of key-value pairs.
    you can think them like dictionaries or maps in other
    programming languages.
    Each value can be any data type.
    (including other objects)
?2. Arrays
    Arrays are used to store multiple values in 
    single variable , and they can hold any type 
    of data , including numbers , strings and even 
    other arrays or objects . Arrays are also a type of 
    objct in js , but they can come with special methods
    to maipulate the data inside them .

primitive values are compared by their actual values
while non - primitives values are compared by reference 
, not by value

primitive data types containers value can be changed
once assgined



*/

let helloString = `Hello , ${1+2+3+4}`
console.log(helloString);   

let a;
console.log(a);

a = 12;
console.log(a);

a = null;

console.log(a);

let myObject = {
    "name" : "Lakshya",
    "age"  : "24",
    "professional" : ["programming","teacher"],
    "courses" : [
        { " name " : " JS basic",
          " duration " : " 2 weeks "
        },
        { "name ": "JS adv",
          "duration" : "3 weeks"
        }
    ]
}
console.log(myObject);
console.log(typeof(myObject));

let myArray = [1,"Laksya",[1,2,4],{"course":"JS"}];
console.log(typeof(myArray))
console.log(myArray.length) //  output is 4 the no. of elements
//length not present on the object 

// ? dynamic typing in js
let x = "aayan"
    x = 1415;
    console.log(x);


/*

*/