// callback is simply a function that is passed to another function as a parameter and is invoked or 
// executed inside the other function.

const greeting = (name) =>{
   console.log('Hello' + name);
}

const processUserName = (callback) =>{
   name = `Mrutyunjaya`;
   callback(name);
}
processUserName(greeting);