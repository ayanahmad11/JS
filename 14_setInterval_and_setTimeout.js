// setInterval and setTimeout

// This function is called every second 
setInterval(()=>{
    console.log("hi")
},1000); 

// This function is called once after 2 seconds
setTimeout(()=>{
    console.log('salam')
},2000)

const timeoutId =  setTimeout(()=>{
    console.log("Inside Timeout");
})

clearTimeout(timeoutId);

// Synchronous code.

const a =10,b = 12 , c = 13
console.log(a,b,c);

// Asynchronous code.
console.log("Start")
setTimeout(() => {
    console.log("Hello")
}, 1000);
console.log("end");

//? Callback
/*
Callbacks: A callback is a function passed into another function 
as an argument, which is then invoked 
inside the outer function to complete some kind of routine or action.
*/
function greeting(name){
    console.log("hello " + name)
}
function processInput(callback)
{
    let name = "Ayan"
    callback(name)
}
processInput(greeting);


