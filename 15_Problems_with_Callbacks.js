function getUser(userId,callback){
    // Db calling --> time lagta hai
    // the setTimeout function is to show delay as
    // it takes time to get data from database.
    setTimeout(()=>{
        callback(null,{userId: userId,userName:"Jack Sparrow"})
    },1000);
}
function getUserPosts(userId,callback){
        setTimeout(()=>{
            callback(null,[{postId:1,content:"Hello World"}]);
        },1000);
}

getUser(1,(err,user)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(user);
    getUserPosts(user.userId,(err,posts)=>{
        if(err){
            console.error(err)
            return;
        }
        console.log(user,posts);
    })
})
