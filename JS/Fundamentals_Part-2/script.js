'use strict';
// const interface = 'Audio'; SyntaxError: Unexpected strict mode reserved word
// const private = 123; SyntaxError: Unexpected strict mode reserved word

/* Functions */
//DRY (Dont repeat yourself)

// no return type
function withOutReturn() {
    const sum = 2 + 3;
    console.log(sum, '11'); // will not execute if sum will not return ⚠️
    console.log('no returtype');
}
withOutReturn(); // this process is called call or invoke or execute. All terminology are same
// with return type
function juice(banana, milk) {
    const juice = `Enjoy ${banana} banana and ${milk} ml milk shake`
    return juice
}
console.log(juice(3, 5));

/* Function declarations vs expressions 
    Hoisting 🚀
*/
// In declaration function name is declared but in expression using assignment operator(=) without name declaration
// Also a speacial case which described below 😊

// declaration
console.log(declare('Pulsar')); // But not recommended ⚠️
function declare(bike) {
    const show = `My bike brand is ${bike}`;
    return show;
}
// expression : Recommended 🆗
// console.log(car('bugati')); if we will call before declaration will throw : ReferenceError: Cannot access 'car' before initialization
// This mechanism is called hoisting 😎

const car = function (car) {
    const show = `My car is ${car}`;
    return show
}
console.log(car('bugati'));

/*
  Arrow Functions 
  same as function expresions
*/

const calcAge = birthYear => 2022 - birthYear // for single parameter.return happens implicitly.No need to define return keyword explicitly 😎
console.log(calcAge(1994), `is your age`);

// for more than one parameter. for multiple parametrs we have to do return
const yearsRetireLeft = (birthyear, fullName) => {
    const age = 2022 - birthyear
    const retire = 60 - age;
    return `Hey! ${fullName} your retirement year is ${retire}`;
}
console.log(yearsRetireLeft(1994, 'Lucky'));
/* 🫠 Fundamental difference among traditional functions and arrow functions

🚀 Function declarations & Expressions : Arrow function don't get this key word
 
*/

/*
   Functions calling other functions
*/
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitJuice(banana, apple, pineapple) {
    const cut_banana = cutFruitPieces(banana);
    const cut_apple = cutFruitPieces(apple);
    const cut_pineapple = cutFruitPieces(pineapple);
    return `Enjoy fruit juice with ${cut_banana} banana,${cut_apple} apple and ${cut_pineapple} pineapple pieces.`
}
console.log(fruitJuice(3, 4, 5));

/*
   Introduction to Arrays (A Data structure). Type of Array is Object🚀.So Array can use methods😎
*/
// We can store heterogeneous data type in an array . like strings , numbers etc
/*
  creating array 2 types:
  const day = ['Mon','Tue','Wed'] ; its called literal syntax
  const years = new Array(2000,2001,2003);
*/
const life = ['Happy', 'Sad', 'Bliss', 'Peace', 'Angry', 'Cool', 'Patience']; //its called literal syntax
const years = new Array(2000, 2001, 2002, 2003, 2004, 2005, 2006);
console.log(life.length);
console.log(life[life.length - 1]); //gives last element , 2 will give 2nd element from right and goes on
life[4] = 'smile'; //replace new value for an index
console.log(life);
// 🚀 We have declared variable life as const , but still we able to assign😊 
// Arrays and objects are mutable.But only primitive data types (7 types) or values are immutable.⚠️
// This the way JS stores in memory

// But we can not replace entire Array.
//life = ['linear', 'oneline']; // will give TypeError: Assignment to constant variable.
const firstname = 'lucky';
const show = [firstname, 2022 - 1994, life];
console.log(show);

/*
  Basic Array operations 
*/

const days = ['sun', 'mon', 'tue'];
days.push('wed'); // insert at last
console.log(days);
days.unshift('sat') // insert at beginning
console.log(days);
days.pop(); // no need to pass any argument.Opposite of push,removes from last,also return removed elememt
console.log(days);
days.shift() // opposite of unshift , removes first,also return removed elememt
console.log(days.indexOf('tue')); //return index in an array
console.log(days.indexOf('notpresent return -1')); // not present return -1
// from ES6 includes used for same purpose of indexOf.returns true or false.Optional to use which one
// returns true or false. checks '==='. Doesnt do type coercion.Also includes can be used in conditionals like, if/else , because includes return true or false 🚀
console.log(days.includes('tue')); // checks strict equality '==='
console.log(days.includes('notpresent return -1'));

/*
   Introduction to Objects (A Data structure)
   In array no way of giving elements a name,we can't reference by elements as name, but only by there order number in which they appear in array. To solve this problem Object can be used
   . In object order doesn't matter while retriving. But in array matters
*/
// creating objects
// 1. using object literals
const objLiterals = {
    lName: 'looka',
    fName: 'lucky',
    job: 'developer',
    age: 2022 - 1994,
    hobby: ['sleep', 'again sleep']
}
// Dot vs Bracket Notation (retrieve and change data in objects)
console.log(objLiterals); // In browser console keys will be displayed in alphabatic order.so to retrieve value key is used.Duplicate key not allowed
// retrive value using dot
console.log(objLiterals.age); // . is an operator
// retrive value using dot Bracket
console.log(objLiterals['lName']); //Always key should be inside '' 
// using bracket expressions can be used
const nameKey = 'Name';
console.log(objLiterals['l' + nameKey]); // same as console.log(objLiterals['lName']);
// A 🔥🚀concept below 😎
const interedIn = prompt(`What do you want between objLiterals? 
                          choose between:lName,fName,age,job,hobby`)
// undefined we get , when we try to access a property on an object that does n't exist
// print custom string when key is not present in object i.e undefined
if (objLiterals[interedIn]) {
    console.log(objLiterals[interedIn]);
}
else {
    console.log(`Wrong Request !choose between:lName,fName,age,job,hobby`);
}
// Add new properties to objects using both Dot and Bracket notation  
objLiterals.location = 'India';
objLiterals['contact'] = 'close your eyes I am there😎';
console.log(objLiterals);
// find count all hobby most spent hobby
console.log(`I have ${objLiterals.hobby.length} hobbies and most 
frequent one is ${objLiterals.hobby[1]}🫠`);

/*
  Object methods
  Any function that is attached to object is called method
*/
const objLiteral = {
    lName: 'looka',
    fName: 'lucky',
    birthYear: 1994,
    job: 'developer',
    age: this.calcAge,
    hobby: ['sleep', 'again sleep😴', 'sleeping🛌'],
    hasDriverLicense: true,
    calcAge: function () {
        console.log(this);
        this.age = 2022 - this.birthYear;
        return this.age
    },
    getSummary: function () {
        return `${this.lName} is a ${this.age} years old guy and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`

    }
}
console.log(objLiteral.calcAge());
console.log(objLiteral.getSummary());

/*
  Iteration : The For loop . Arrays
  For loop keeps running while the condition is true
*/
// rep is not defined if we will do only rep = 1 without let or var . const will give Uncaught TypeError: Assignment to constant variable.
for (let rep = 1; rep <= 1; rep++) {
    console.log(`${rep}`);
}

/*
  Looping Arrays,Breaking and continuing
*/
const _years = [2000, 2001, 2002, 2003, 2004, 2005];
const _ages = [];
for (let i = 0; i < _years.length; i++) {
    _ages.push(2050 - _years[i]);
}
console.log(_ages);
// continue & break. continue exists current iteration of loop and continue the next one. Break completely rerminate whole loop 
const _Me = [
    'Life',
    'cool',
    2022 - 1994,
    'developer',
    ['hi', 'hello', 'By'],
    true
];
console.log(typeof _Me[2]);
// continue only if values are string. skip iteration except string values
for (let i = 0; i < _Me.length; i++) {
    if (typeof _Me[i] !== 'string') continue
    console.log(_Me[i], typeof _Me[i]);
}
// break loop if number is there . As soon as a number is found break the loop
for (let i = 0; i < _Me.length; i++) {
    if (typeof _Me[i] === 'number') break
    console.log(_Me[i], typeof _Me[i]);
}

/*
  Loop Backward and loop inside loop. Arrays 
*/

const _Iam = [
    'Life',
    'cool',
    2022 - 1994,
    'developer',
    ['hi', 'hello', 'By'],
];
// looping backward
for (let i = _Iam.length - 1; i >= 0; i--) {
    console.log(i, _Iam[i]);
}
// for loop inside for loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----start exercise ${exercise}`);
    for (let repeat = 1; repeat < 6; repeat++) {
        console.log(`Exercise ${exercise}: Liftiting weight repetition ${repeat} time 🏋️`);
    }
}

/*
  While loop
  Special case: When loop does n't require upon a counter instead for random variable
  whenever you dont know before hand how many iteration the loop will have 
*/
let dice = Math.trunc(Math.random() * 6) + 1; // will give random number between 1 to 6
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`while Loop is end ...`);
    }
}

