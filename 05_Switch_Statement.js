/*

A switch statement is like a control center that evaluates an expression 
and matches it against multiple cases . Each case represents a possible value.
If a match is found , the code inside that case runs . If no match is found,
an optional default case runs.

*/
let today = "Monday"

switch(today){
    case "Monday" : 
    console.log("It is the start of the week ");
    break;
    case "Saturday":
    case "Sunday" : 
    console.log("It is a weekend");
    break;
    default:
        console.log("It is a normal working day ");
        break;
}
//? Common mistakes 
//*1> Forgetting the break statement:
//* Without break, multiple cases will run even if only one matches.

//*2> Using comparison operators:
//*Switch statements only compare equality.
//* You cannot use operators like >, <, or >= directly.

let Animal = "cat";
switch(Animal){
    case "cat":
        console.log("meow")
        break;
    case "dog":
        console.log("woof")
        break;
    case "horse":
        console.log("neigh")
    default:
        console.log("Unknown Sound")
        break;
}

let day = "Tuesday"; // Change this value to test different days

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend");
    break;
  default:
    console.log("Invalid day");
}