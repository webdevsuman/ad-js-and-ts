// 1) What are the different data types present in javascript?----------------------------------

//Data types in javascript is divided into two categories - Primitive and Non-primitive.
//Primitive data types are divided into 7 categories - Number, String, Boolean, Symbol, Undefined, Null and BigInt.
//Non-primitive data types are - Object, Arrays and Functions.

// 2) Explain Hoisting in javascript.---------------------------------------------------------

//Hoisting in javascript refers to the process of automatic initialization of variables and functions at the beginnning of their respective scopes before execution of the code begins. Variables declared with let and const are declared but not initialized during hoisting. They remain in the Temporal Dead Zone. Variables declared with var are hoisted and initialized as "undefined". Function declarations are hoisted at the top of the scope. But Function expressions are treated as variables during hosting and gets initialized according to how they are declared(let, const or var).

// console.log(a);
// console.log(b);
// console.log(c);
var a = "hi";
let b = "world";
const c = 555;


// 3) Why do we use the word “debugger” in javascript?---------------------------------------

//We use a debugger in JavaScript to help identify and troubleshoot issues in our code. A debugger allows you to pause the execution of the code at specific points, inspect the values of variables, step through the code line by line, and track the flow of execution. This helps developers find bugs or errors that might not be immediately obvious, such as logic mistakes or unexpected behavior.

//Here are some key reasons to use a debugger: Inspect Variables, Step Through Code, Set Breakpoints, Check Call Stack, Examine Asynchronous Code.


// 4)Difference between “ == “ and “ === “ operators.----------------------------------------

// Double and Triple equal signs both are used to compare values. Double equal sign only compares the values and returns true even if data type is not a match. But triple equal sign checks both values and data types and returns true if both matches.

// 5)Difference between var and let keyword in javascript.----------------------------------

//Var and let both are used to declare variables or functions. Both can be reassigned later after declaration. But there are some differences. Variables declared with let are block scoped but variables declared with var is function scoped. When accessing uninitialized variables declared with var, the value it shows is "undefined". But in case of variables declared with let, accessing it results in "Reference Error".

// console.log(p);
// console.log(q);
// console.log(r);
var p = "hi";
let q = "world";
const r = 555;

// 6)What is NaN property in JavaScript?------------------------------------------------------
let n = "deepak";
n = Number(n);
// console.log(n,typeof n);
//In JavaScript, NaN stands for Not-a-Number. It is a special value that represents an undefined or unrepresentable numeric value. But its data type is of Number.

// 7)Explain passed by value and passed by reference.---------------------------------------

//In javascript when we pass arguments into a function, we can do it two ways - either passing hardcoded value, like the primitive values or we can pass some variable or function. When we pass hardcoded value into a function, its called pass by value. When we pass a variable or function we are actually passing the memory address of the variable where the value is stored. It is called pass by reference.

// 8)What do you mean by strict mode in javascript and characteristics of javascript strict-mode?
// --------------------------------------------------------------------------------------------

//Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
//JavaScript's strict mode is a restricted version of JavaScript that enforces stricter parsing and error handling. It helps developers write cleaner code and catch errors early. 
//Strict mode changes "bad syntax" into errors, making it harder to accidentally create global variables or assign values to non-writable properties 
//Strict mode throws errors for mistakes that would normally be silently ignored.

// "use strict";