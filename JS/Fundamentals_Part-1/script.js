// console object AND boxes : prompt, alert, confirm 
let js = 'amazing';
if (js === 'amazing') alert('Javascript is fun!');
console.log(40 + 8 + 23 - 10);

// SECTION_1 : values and variables
let my_name = 'Mrutyunjaya';
console.log(my_name);
// Spaces are not allowed in variable names.
// Only letters(a-z), digits(0-9), underscores(_), and dollar signs($) are permitted in variable names.
// Case matters when it comes to variable names. Recommended not to start upper case letter in starting of variable (like A , can be used in OOP)(camelCase)
// A letter (alphabet), an underscore (_), or a dollar sign ($) must be the first character in a variable name, any other special characters must not be taken.
// certain terms such as reserved words in javascript shouldn’t be used to name variables.(Above example line no 7 try let name = 'value' and console.log(name). Will get deprecated warning), new, function . 
// variable name must not start with numbers (0-9) . But can be used symbols like _ and $ starting
// All upper case variable name treated as real constant. let PI = 3.1415
// variable name should be descriptive


// SECTION_2 : Data Types
// Number, String, Boolean, Undefined, Null, Symbol, BigInt
// without '' or "", a will be treated as variable . But 'a' or "a" is string 

// dynamic typing
// Type of value can be changed that is hold by variable 
let fun = true;
console.log(typeof fun); // boolean
// reassign variable
fun = 'YES!';
console.log(typeof fun); // string

let year; // variable declared but not assigned vale is undefined
console.log(year); // undefined
console.log(typeof year); // undefined
year = 2022;
console.log(typeof year);

console.log(typeof null); // object

// SECTION_3 : let, const and var

// let can be reassign i.e mutate . Block scope
// const can't be reassigne i.e immutate once again . But outside block can be.will give TypeError
// Empty const cant be created i.e initial value is must. const job; will give SyntaxError
// var is global/function scope
// without defining let,const and var variable can be declare but not recommended

// SECTION_4 : Basic Operators 
// Arithmetic,Assignment,Comparison,Logical,Conditional,Type 
// 'a' + 'b' is ab
// a + b , ReferenceError: a is not defined

let x = 10 + 5; // 15 , if we declare const will get TypeError: Assignment to constant variable.
x += 10; // x = x + 10
console.log(x);

x++ // x = x + 1  increment
x-- // x = x - 1  decrement

x -= 2// subtraction
x *= 12 // multiplication
x /= 1 // Division
x %= 4 // Modulus (Division Remainder)
x **= 2 // exponent

// SECTION_5 : Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

// SECTION_6 : Strings and template literals
// `` backtick
// '$({var1}) also $({anyexpression}) as it is can be displayed '
/* multiline i.e newline.
  ` abc
     def
       ghi`
 above will be printed as it is without \n\
*/

/*  SECTION_7 : Taking Decissions , if/else  */
// else is optional

/*  SECTION_8 : Type conversion and coercion */
// conversion, is manually converted explicitly
const inpYr = '2022'
console.log(inpYr + 3); // 20223
console.log(Number(inpYr) + 3); // 2025
console.log(Number('abc')); //NaN 
console.log(typeof NaN); // Number
console.log(String(1)); // '1'
// coercion, js automatically converts behind the scene implicitly
console.log('23' - '5' - 8);

/*  SECTION_9 : Truthy and Falsy */
// 6 Falsy values. false, 0,'',undefined, null, NaN

/*  SECTION_10 : Equality Operator == vs ===*/
// == checks vale (opposite !=) , ===  checks both value and type(opposite !==)

const favNum = prompt(`what's your favourite number`) // dfault return is string
console.log(favNum);
console.log(typeof favNum); // string
const favNum1 = Number(prompt(`what's your favourite number`))
console.log(typeof favNum1); // number

/*  SECTION_11 :  Boolean Operator */

/*  SECTION_12 :  Logical Operator*/
// && , || ,!\

/* SECTION_13 :  Switch Statement */
// In switch statement by default both value and type checked (===) . Can be manipulated but not a good practice. Better approach than using if

/* SECTION_14 :  Statements and expressions */
// expression a piece of code that produces a value
// statement a bigger piece of code that is executed and which doesn't produce a value on it self
// In oneline we can say, A declaration is complete sentence and expressions are the words that make up the sentences. And we write whole program as a sequence of actions. These actions are statements.

/* SECTION_15 : The conditional(ternary) */
// Inside template literal ternary operator can be used as expressions but not if else statement
