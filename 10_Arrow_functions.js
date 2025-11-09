function add(a,b){
    return a+b
}
console.log(add(4,6));

let addFun = (a,b) => {
    return a+b;
}

console.log(addFun(4,5));

let multiplyBy2 = a =>  a * 2;

console.log(multiplyBy2(2));

let greet = () => console.log("Heyy")

// Syntax of arrow functions
// Arrow functions allows you to write shorter 
// and cleaner functions.

/*  Key features

1> Paranthesis around parameters are optional
   if you have only one paramter.

2> Curly braces {} are optional if the function has a single statement.

3> If the function has multiple statements , use curly braces {} and 
   an explicit return statement.

4> If the function takes no parameters, use empty parenthesis ().

?? Differences Between Traditional Functions and Arrow Functions
  *  While arrow functions provide a cleaner syntax, they behave differently
  *  from traditional functions in some key ways - particularly in how 
  *  they handle the this keyword.
  
?? Scope of `this` in Arrow Functions
 *  In Js, the this keyword refers to the object that owns the function .
 *  With tradtional functions, this changes based on how the function is called.
 *  However arrow functions do not have their own this. Instead, they inherit 
 *  this from the surrounding(lexical) context.
 
*/
let obj1 = {
    "name" : "Ayan",
    "greet" : function(){
        console.log(`Hey my name is ${this.name}`)
    }
}
// var name = "Ahmed" //  still in obj.greet()
// shows undefined bcox in nodejs global represents to empty object


let obj2 = {
    "name" :"Ajaz",
    "greet" : ()=>console.log(`Hey my name is ${this.name}`)
}

obj1.greet()
obj2.greet() // undefined in place of name
 
/*
* Use Arrow functions 
* 1> When you don;t need this binding
* 2> For simple, one-line functions
* 3> As Callbacks in array methods(map,forEach)
*/

/* 
? Use traditional functions
* 1> When you need this to refer to the 
*    calling object .
* 2> For complex functions with multiple
*    statements   .
* 3> When defining methods on an object.
*/
