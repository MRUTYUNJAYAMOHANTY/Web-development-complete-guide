'use strict';
///////////////////////////////////////
// Scoping in Practice
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    let output = `${firstName} you are ${age} years old and born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Lucky';
      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `you are millenial ${firstName}`; // will print firstName of current scope
      console.log(str);
      function add(a, b) {
        return a + b;
      }

      //const output = 'const NEW OUTPUT!'; // create a new variable
    }
    //console.log(str); will give error. const and let are block scope
    console.log(millenial); // will give true. var is function scope
    console.log(output);
    //add(2, 3); // will give error. cannt access outside block.But only in strict mode
  }
  printAge();
  console.log(firstName);
  return age;
}
// console.log(millenial); will give error
const firstName = 'Mrutyunjaya';
calcAge(1994);
/*
  console.log(age); // will get Uncaught reference error : age is not defined
  age can not be accessed outside function
  Also same for printAge().It can not be called outside function for same reason. will get Uncaught reference error : printAge is not defined 
  Global scope we dont have access to any variables defined in any other scope
*/

///////////////////////////////////////
// Hoisting in TDZ(Temporal Dead Zone) Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Lucky';
let job = 'developer';
const year = 1994;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;
// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted!');
}
var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
///////////////////////////////////////
// The this Keyword in Practice
console.log(this);
const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calAge(1991);
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);
const iam = {
  year: 1991,
  calAge: function () {
    console.log(this);
    //console.log(2037 - this.year);
  },
};
iam.calAge();
const myself = {
  year: 2017,
};
myself.calAge = iam.calAge;
myself.calAge();
const f = iam.calAge;
f();
///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'looka';
const ime = {
  firstName: 'lucky',
  year: 1994,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);
    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
ime.greet();
ime.calcAge();
// arguments keyword
const addingExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addingExpr(2, 5);
addingExpr(2, 5, 8, 12);
var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
