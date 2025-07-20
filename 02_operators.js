let num1 = 10;
let num2 = 3;

//* Arithmetic operators
console.log("a+b = ",num1+num2);
console.log("a-b = ",num1-num2);
console.log("a*b = ",num1*num2);
console.log("a/b = ",num1/num2);
console.log("a%b = ",num1%num2);

//* Assignement operators
// = , += , -= , *= , /= , %=

//* Comparison Operator
/*
 * 1> ==  this is loose equality operator. It checks if the values are equal.
 *        but ignores the data types.
 * 
 * 2> ===  This is the strict equaltiy operator . It checks if the values
 *         and the data types are both the same.
 *          
 *         console.log(2 == '2'); // true
 *         console.log(2 === '2'); // false
 * 3> !=   
 * 
 * 4> !==
 * 5>  >
 * 6>  <
 * 7>  <= , >=
*/

//* Logical Operators - && , || , !

//? String Concatenation and Template literals
/* 
?1> String Concatenation (Old school)
?2> Template Literal (Modern and Awesome)

*/

let firstName = "lakshya";
let lastName = "Mittal"

// old school
// let fullName = firstName + lastName;

// new way
let finalName = `${firstName} ${lastName}`
console.log(finalName);

//* Unary Operators
//* 1> TypeOf
//* 2> ++
//* 3> --