//? prompt() -  Getting input with prompt() [ Browser Only ]
// creates a  pop-up window with text-field , asking the user for 
// input . The input is always returned as a string .
// This method is only available in browsers
//* If the user cancels the prompt() returns the null value
//? alert - displaying messages with alert()   [ Browser Only ] 
/* 
 * alert() is a blocking pop-up message that pauses all interaction on the page untill
 * the user clicks "OK",It's a way to show quick notifications, but it only
 * works in browsers
 */

//? Using readline for input in Node.js
//* In Node.js , you can use the built in readline module 
//* to collect input from the user.

const readline = require('readline')

let rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout      
});

rl.question("what is your name?\n",function(name){
    console.log(`Hi, ${name}`);  
    rl.close(); 
})

// outputting using console.log() works everywhere - browser and node.js