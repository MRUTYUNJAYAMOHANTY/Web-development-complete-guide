// A process whereby the interpreter appears to move the declaration of functions, variables or classes 
// to the top of their scope, prior to execution of the code.
//  Hoisting can lead to unexpected errors, and is not generally recommended.
// can be referenced before they are declared

// FUNCTION HOISTING

// 1. we use function before we declare it

employeeName('lucky'); // used here by calling function

function employeeName(name) {
    console.log('employee name is ' + name , `@ function hoisting`);
} // declared here


//  N.B 
//    without hoisting we would have to write in logical order like 
//    first declare than call , will gave same o/p

// VAR HOISTING

// 1. We declare then initialize value of var after using it.
// default initialization of the var is undefined.

console.log(num,`@ var hoisting`); // Returns 'undefined' before declaration  
var num; // declaration 
console.log(num,`@ var hoisting`); // Returns 'undefined' before declaration and assignment 
num = 1 ; // initialization
console.log(num , `@ var hoisting`); //Returns 1 after the line with initialization is executed.

//same thing happens if we declare and initialize the variable in the same line.
console.log(numb); // Returns 'undefined' from hoisted var declaration (not 2)
var numb = 2; // Initialization and declaration.
console.log(numb , `@ var hoisting declare and initialize the variable in the same line` ); // Returns 2 after the line with initialization is executed.

// not declare only initialize

// console.log(number); // Throws ReferenceError exception - the interpreter doesn't know about `number`.
// number = 6; // Initialization

// let and const hoisting
// Variables declared with let and const are also hoisted but, unlike var, are not initialized
//  with a default value. An exception will be thrown if a variable declared with let or const
//   is read before it is initialized.

// console.log(digit); // Throws ReferenceError exception as the variable value is uninitialized
// let digit = 6; // Initialization

// class hoisting

// Classes defined using a class declaration are hoisted, which means that JavaScript has a 
// reference to the class. class is not initialized by default, so any code that 
// uses it before the line in which it is initialized is executed will throw a ReferenceError.
      // Class declarations

      class Rectangle {
        constructor(height, width) {
          this.height = height;
          this.width = width;
        }
      }