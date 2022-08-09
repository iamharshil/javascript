//* variables are containers for storing data.
/*
 4 ways to declare variables: let, var, const, using nothing
 we can assign variable and declare it later in let and var where it will assin "undefined" value to that variable
 in const we have to initialize the variable at declaration
*/

// variables can contain letter digits underscore and dollar sign
// must begin with letter and also with _ and $
//? assign operator "="

//* we can assing multiple variables at once
let person = "John Doe",
    carName = "Volve",
    price = 200;

//* we can redeclare var but we cannot redeclare let
/*
var hello = "hello world";
var hello = "hello multiverse"; // re-declare will work here
let hellow = "hello world";
let hellow = "hellow multiverse"; // this will give error
*/

//* let keyword
/*
- cannot be redelcared
- must be declared before use
- have block scope
*/

//? block scope
/*
- before ES6(2015) js only had global scope and function scope.
- ES6 introduce us let and const which provide block scope
- variable declare inside { let x = "hello" } cannot be accessed from outside of block
*/

//* var hoisted
// - variable defined with var are hoisted to the top and can be initialized at any time
// - which means you can use it before its declared
// variable let is also hoisted but not initialized which means you cannot use declared let it will throw error
