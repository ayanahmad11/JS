const sum = (a,b)=> a + b;
console.log(sum(5,6));

const person = {
    "name" : "Alice",
    greet : function(){
        console.log(`Hello,my name is ${this.name}`)
    }
}
person.greet();

const celsiusTemp = [0,20,30,100]

const fahrenheitTemp = celsiusTemp.map(c => (c * 9/5 )+32)

console.log(fahrenheitTemp)