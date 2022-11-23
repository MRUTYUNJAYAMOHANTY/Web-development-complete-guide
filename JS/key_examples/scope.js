// scope means what variable do have the access when code is running.
// by default it is in always in root scope i.e. the window scope. 
// We can say it's a  boundary for variables, functions, and objects.

//  2 types 
//    - local scope 
//        . allow access to everything within the boundaries
//    - global scope
//        . is everything outside the boundaries
//        . global scope can not access a variable defined in local scope because it is enclosed from 
//          the outer world, except if you return it.

function showName(){
    var name = `iammrutyunjaya`;
    console.log(name);
}
showName();
// console.log(name); // err , name is not defined 
function scopeFunction() {
    var x = "declared inside function";  // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}

console.log(x,`25`);  // undefined

var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);