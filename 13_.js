// Array
const names = ["Ayan","Adil","Adnan",1];
console.log(names);
// push 
names.push("Ayush") //  although we used const names but still it pushed the elemeent in array
console.log(names);

// Array function
// findIndex function
const index = names.findIndex((item)=> item  == "Adnan")
console.log(index);

// filter function
const newNames =  names.filter((item) =>{
    return item!="Ayan";
})
console.log(newNames);
const ages = [10,20,44]
const nages = ages.filter((age)=> age>18)
console.log(nages)

// map function
const fullNames = names.map((name,index)=> index == 0 ?name + "ahmed" : name + "23" )
console.log(fullNames);

// forEach
names.forEach((name)=> console.log(name));

// Destructuring
const userName =  ["donald","Modi"]
const fName = userName[0];
const lName = userName[1];

console.log(fName)
console.log(lName)

// Array Destructuring
const [firstName,lastName] = ["donald","modi"]

// Object Destructuring

const { name , age } = {
    name: "Lakshya",
    age : "20"
}

console.log(name)
console.log(age);

// Spread Operator

const num1 = [1,2,3,4,5]
const num2 = [10,11,12,13,14]

let merged = [num1,num2]
console.log(merged)
merged  = [...num1,...num2] 
console.log(merged)



