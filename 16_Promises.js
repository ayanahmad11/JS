// Promises
/* 
A Promise in JavaScript is an object representing the eventual 
completion or failure of an asynchronous operation. 
Promises provide a cleaner and more manageable way to handle
asynchronous tasks compared to traditional callback-based approaches. 
*/

// promise banana
// const promise = new Promise(function(resolve,reject) {
//     setTimeout(()=>{
//         console.log("Async task completed");
//         // resolve();
//         resolve({message:"success",data:[]})
//     },1000)
// })
// // promise use karna
// promise.then(function(response){
//     // console.log("Promise resolved");
//     console.log(response);
// }).catch(function(err){
//     console.log(err);
// });

// // Previous code15 modified with promises

function getUser(userId){
    // Db calling --> time lagta hai
    // the setTimeout function is to show delay as
    // it takes time to get data from database.
    return new Promise(function (resolve,reject){
        setTimeout(()=>{
            resolve({userId: userId,userName:"Jack Sparrow"})
        },1000);
    });  
}

function getUserPosts(userId){
    return new Promise(function(resolve){
        setTimeout(() => {
           resolve({postId:1,content:"hello world"}) 
        }, 1000); 
    })
}

// // .then() chaining 
// getUser(1).then((user)=>{
//     console.log(user);
//     return getUserPosts(user.userId)
// })
// .then((posts)=>{
//     console.log(posts);
// }).catch((err)=>{console.log(err)});

// async- await
async function getUserandPosts(userId){
    try{
        const user = await getUser(userId);
        const posts = await getUserPosts(user.userId);
        console.log(user);
        console.log(posts);
    
    }
    catch (err){
        console.log(err);
    }
}
getUserandPosts(1);
/*
| Concept     | Meaning                                                             |
| ----------- | ------------------------------------------------------------------- |
| `Promise`   | Object that represents a value that will be available in the future |
| `resolve()` | Fulfills the Promise (successful result)                            |
| `reject()`  | Fulfills the Promise with an error                                  |
| `.then()`   | Runs when Promise resolves                                          |
| `await`     | Waits for a Promise to resolve inside an `async` function           |
| `async`     | Makes a function return a Promise automatically    
                 |
*/