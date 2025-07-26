//? What is Scope?
/* *
* When we define a variable , there is a set boundary in which it 
* is accessible , that boundary is called scope.
* varible defined in one part may not be visible elsewhere.
*/

/*
TODO :There are several types of scope in js 
*1> Global Scope
*2> Local Scope (including function scope)
*3> Block - level scope (using let and const)
*/

//? Global Scope
// * A global variable is declared outside any 
// * function or block

let myGlobalVariable = "Ayan"

function okay(){
    myGlobalVariable = "Ahmed"
    console.log("Inside a function : ",myGlobalVariable)
}
okay()
console.log("Global Space : ",myGlobalVariable)

//? Local scope
//* A local variable is declared inside a function and can only 
//* accessed within that function .

function myFun(){
    let myLocalVariable = "Local Variable"
    console.log("Inside a fun : ",myLocalVariable)
}

myFun();

console.log("Outside a fun",myLocalVariable)
// error : ReferenceError: myLocalVariable is not defined


// Block Level scope with let and const from ES6
//* In js, let and const introduce block-level scope.meaning the
//* variables declared with them only exist inside the block {}
//* where they are defined .

{
    //  this is a Block
}
if(true){
    // let myCar = "Lakshya" // doesn't works
    var myVar = "Lakhsya" // works  as var does not conside this {} as scope
    console.log("Inside if block ",myVar)
}
console.log(myVar);

// functions create local scope for all let,const,var
function fun(){
    var myY = 21;
    console.log(myY)
}
console.log(myY); // error myY is not defined

// Block level Scope with let and const
/*
*
*/