/*
? Export: You can export functions, objects,
or primitive values from a module so that
they can be used by other parts of your application.
? Import: Use import to bring exported values into another file.
*/
// import { message } from "./util.mjs";
// import {message as randomName} from './util.mjs'
// import {message , message2} from './util.mjs'
import * as util from "./util.mjs"

console.log(util);
console.log(util.message);

// Call by reference and Call by Value
let a = 3;
let b =a;
b+=3;
console.log(a,b)
//
let arr  = [1,2,3] 
//? Call by reference
// let copy = arr; [if we use it, copy is referred to arr by reference]
// so if we do any thing on copy it will be reflected to arr also

//? Call by value
// let copy = arr.slice(0,3);
let copy = [...arr]

arr.push(4);

console.log(arr)
console.log(copy)

