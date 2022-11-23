// stands for Immediately Invoked Function Expression

// immediately invoked and executed as soon as it is defined.

// Variables declared within the IIFE cannot be accessed by the outside world and this way 
// can avoid global scope from getting polluted.

// primary reason to use IIFE is to immediately executes the code and obtain data privacy.

let color = 'red' ;

const paint = (() =>{
    return{
        changeColorToBlue:()=>{
            color : 'Blue'
            return color
        },
        changeColorToGreen:()=>{
            color : 'Green'
            return color
        }
    }
})();
console.log(paint.changeColorToBlue()); // red
console.log(paint.changeColorToGreen());// red

// IIFE 
(function () {
    /* ... */
  })();

//   Arrow function IIFE
(() => {
    /* ... */
  })();

//   async IIFE
(async () => {
    /* ... */
  })();

//   A design pattern which is also known as a Self-Executing Anonymous Function and contains two major 
//   parts:

//   1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). 
//      This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//   2. The second part creates the immediately invoked function expression () through which the JavaScript 
//      engine will directly interpret the function.

// what is grouping operator ; like  BODMAS rule
console.log(1 + 2 * 3); // 1 + 6
// expected output: 7

console.log(1 + (2 * 3)); // 1 + 6
// expected output: 7

console.log((1 + 2) * 3); // 3 * 3
// expected output: 9

console.log(1 * 3 + 2 * 3); // 3 + 6
// expected output: 9

// Use cases of IIFE

   // Avoid polluting the global namespace
   (() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
  })();
     // firstVariable and secondVariable will be discarded after the function is executed.

   // Execute an async function
//    const getFileStream = async (url) => { /* implementation */ };

//    (async () => {
//      const stream = await getFileStream('https://domain.name/path/file.ext');
//      for await (const chunk of stream) {
//        console.log({ chunk }); TypeError: Cannot read properties of undefined (reading 'Symbol(Symbol.asyncIterator)')
//      }
//    })();
   

   // The module pattern
    //IIFE to create private and public variables and methods
    const makeWithdraw = (balance) =>((copyBalance)=>{
      let balance = copyBalance; // This variable is private
      const doBadThings = () => {
          console.log('I will do bad thing with your money');
      }
      doBadThings();
      return{
          withdraw(amount){
              if(balance>=amount){
                  balance -= amount ;
                  return balance;
              }
              return 'Insufficient Money';
          }
      };
    })(balance);
    const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
    //console.log(firstAccount.balance); // undefined
    console.log(firstAccount.withdraw(20),`updated balance`);
    console.log(firstAccount.withdraw(30),`updated balance`);
  //  console.log(firstAccount.doBadThings);    // undefined; this method is private
    const secondAccount = makeWithdraw(20);   // "I will do bad things with your money"
    console.log(secondAccount.withdraw(30));  // "Insufficient money"
    console.log(secondAccount.withdraw(20));  // 0

   // For loop with var before ES6
//    before the introduction of the statements let and const in ES6 and the block scope
//    With the statement var, we have only function scopes and the global scope. 
//    Suppose we want to create 2 buttons with the texts Button 0 and Button 1 and we click them, 
//    we would like them to alert 0 and 1. The following code doesn't work:

// An IIFE looks like this:

(function() {

  var message = "Hello";

  console.log(message); // Hello

})();
// Here, a Function Expression is created and immediately called. 
// So the code executes right away and has its own private variables.

// The Function Expression is wrapped with parenthesis (function {...}), 
// because when JavaScript engine encounters "function" in the main code, it understands it 
// as the start of a Function Declaration. But a Function Declaration must have a name, 
// so this kind of code will give an error:

// Tries to declare and immediately call a function
// function() { // <-- SyntaxError: Function statements require a function name

//   var message = "Hello";

//   alert(message); // Hello

// }();

// Even if we say: “okay, let’s add a name”, that won’t work, as JavaScript does not allow 
// Function Declarations to be called immediately:
// syntax error because of parentheses below
// function go() {

// }(); // <-- can't call Function Declaration immediately

// So, the parentheses around the function is a trick to show JavaScript that the function is created 
// in the context of another expression, and hence it’s a Function Expression: it needs no name and 
// can be called immediately.

// Ways to create IIFE

(function() {
    console.log("Parentheses around the function");
  })();
  
  (function() {
    console.log("Parentheses around the whole thing");
  }());
  
  !function() {
    console.log("Bitwise NOT operator starts the expression");
  }();
  
  +function() {
    console.log("Unary plus starts the expression");
  }();