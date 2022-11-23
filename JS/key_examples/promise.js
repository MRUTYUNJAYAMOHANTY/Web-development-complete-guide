// We understand the concept of callback but what will happen if your code will have callbacks within 
// callbacks within callbacks and it goes on. Well, this recursive structure of callback is called 
// as ‘callback hell’ and promises help to solve this kind of issue

// A promise may be in three possible states… 
// Fulfilled: When the operation is completed successfully.
// Rejected: When the operation is failed.
// Pending: initial state, neither fulfilled nor rejected.

const promise = new Promise ((resolve,reject)=>{
 isNameExist = true ;
 if(isNameExist){
     resolve('User name exist');
 }else{
     reject('error');
 }
});
promise.then(result => console.log(result))
.catch(()=>{
    console.log('error !');
})
// console.log(typeof(promise)); // object