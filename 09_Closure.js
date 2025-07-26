function myFun(outside){
    return function(inside){
        console.log(`Outer: ${outside},Inner:${inside}`);

    }
}
let myNewFun = myFun("Outside");

myNewFun("Inside")

function createCounter(){
    let count = 0;
        return function(){
            count++;
            console.log(`Count: ${count}`);
        } 
}
let counter = createCounter();
counter();
counter();
// console.log(count); // error
let message = "Global message"

function showMessage(){
    let message = "Local Message"
    console.log(`Inside function : ${message}`)
}
showMessage()
console.log(`Outside function: ${message}`);
/*
*There are two variables named message: one global and one local to the showMessage function.
*Inside the function, the local variable takes precedence, and outside the function, the global variable is used. This demonstrates scope in action
*/
/* 
? Closure
* A Closure happens when a function remembers variables from its 
* outer scope , even after that outer scope has finished executing.
* Closures are one of Javascript's most powerful features.
 */

/*
? Why are closures Useful?
* 1> Encapsulation : Closure let you hide variables and functions
*    inside  other functions , exposing only what you need.
* 2> Data persistence : Closure allow a function to "remember" the state of
*    variables, even after it finishes running.
*/
