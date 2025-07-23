//? if  , else if , else
let myAge = 20;

let isMember = false;

if(myAge < 18){
    console.log("You are not allowed to buy a ticket");
}
else{
    if(isMember){
        console.log("you get a discount of 20%");
    }
    else
    {
        console.log("You are allowed to buy a ticket, but no discount");
    }
}

//? Ternary Operator (conditional Expression)
// The ternary operator is a short hand way of writing if-else conditions.
// It's great for simple condtions where you want to assign a value or run a
// quick expression based on a condition.


// Condition ? expressionIfTrue : expressionIfFalse

let Age = 10;

let canVote = (Age == 18 )? "You are allowed to vote " :"You are not allowed to vote";

console.log(canVote)

  