/*
  ?  Accessing Object Properties 
1> dot notation : Use dot notation when you know the property name in advance.
2> Bracket notation : Use bracket notation when the property name is stored in 
                      a variable or contains special characters.
*/ 
let myObj = {
    "name" : "Lakshya",
    "age" : 24,
    "greet" : function(){
        console.log(`Hey my name is ${this.name}`);
    }
}
console.log(myObj.age);
console.log(myObj.name);
console.log(myObj["name"]);

let myObj1 = {
    "name" : "Ayan",
    "age" : 24,
    "greet" : function(){
        console.log(`Hey my name is ${this.name}`);
    },
    "course" : { // Nested Objects
        "name" : "Javascript",
        "duration" : "2 months",
        "level" :  1
    }
}
console.log(myObj1.course.level)
console.log(myObj1.age);
console.log(myObj1["name"]);

let myFun = "greet";
myObj1[myFun](); // bracket notation
myObj1.greet();

/*Adding Modifying and deleting properties*/
//* 1>  Adding properties
//* 2> Modifying properties
//* 3> Deleting properties

myObj1.height = 185
console.log(myObj1)
myObj1.height = 187

myObj1["age"] = 23;
console.log(myObj1)


delete myObj1["age"]

console.log(myObj1)
console.log(myObj1.age) // deleted earlier so give undefined
