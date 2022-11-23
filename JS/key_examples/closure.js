// Closures are used when you want to extend behavior such as pass variables, methods, or arrays from an 
// outer function to an inner function. 

// Javascript is not pure object-oriented language but you can achieve object-oriented behavior through 
// closures.

// closures can be defined in simple terms as “a function run, the function executed. 
// It’s never going to execute again but it’s going to remember that there are references 
// to those variables so the child scope always has access to the parent scope.” 

const first = () => {
    const greet = 'Hi';
    const second = () =>{
        const name = 'lucky';
        console.log(greet);
    }
    return second;
}
const newFunc = first();
newFunc();

// surrounding state (the lexical environment) or lexical scoping
function init() {
    var name = 'mrutyunjaya'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2),`add5's lexical environment, x is 5`);  // 7
  console.log(add10(2),`add10's lexical environment, x is 10`); // 12
  
  