/*
 ?  Closures
 * Read A counter dilemma - https://www.w3schools.com/js/js_function_closures.asp

 * The variable add is assigned to the return value of a function.

 * The function only runs once. It sets the counter to zero (0), and returns a function expression.

 * This way add becomes a function. The "wonderful" part is that it can access the counter in its parent scope.

 * This is called a closure. It makes it possible for a function to have "private" variables.

 * The counter is protected by the scope of the myCounter function, and can only be changed using the add function.

 ! Conclusion
 ? A closure is a function that has access to the parent scope, after the parent function has closed.
 *
   


// the counter is now 3
*/
function myCounter(){
    let counter = 0;
    return function plus(){
        counter++;
        return counter;
    }
}
let add = myCounter();
console.log(add());
console.log(add());
console.log(add());


// console.log(counter);// error

/*
extras
function myCounter(){
    let counter = 0;
    return {
        increment: function() { counter++; },
        decrement: function() { counter--; },
        value: function() { return counter; }
    };
}

let counterObj = myCounter();
counterObj.increment();
counterObj.increment();
console.log(counterObj.value()); // 2
counterObj.decrement();
console.log(counterObj.value()); // 1
*/