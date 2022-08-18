//* 4 core concepts : [ Encapsulation, Abstraction inheritance polymorphism ]

// Procedural programming : divide program into set of functions
// which has function and data in it to operate it
// as program grow lot of function will link each other and if make change in 1 function will make change in several other functions too.
// there is lot of inter dependency in the function that it become problematic
// oops came to solve it
// group of related var and funcs into unit which is called as object
// where var = properties and functions are methods
// car = object with make model color properties and method like start() stop() and move().

//? Encapsulation
// 1: procedural way
// let base_salary = 30_000;
// let overtime = 10;
// let rate = 20;

// function getWage(base_salary, overtime, rate) {
//     return base_salary + overtime * rate;
// }

// 2: oops way
let employee = {
    // this 3 are properties of object
    base_salary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.base_salary + this.overtime * this.rate;
    },
};
console.log(employee.getWage());
//! So encapsulation mean: "wrapping code and data together into a single unit";

//? Abstraction
// we hide some properties and methods from outside
// benefits:
// simple interface
// reduce the impact of Change (if we change anything later it will not effect anything else)

//? Inheritance
// eliminate redundant code
// Example : html -> text, select, checkbox -> has common thing -> hidden, innerHTML and click(), focus() -> instead of define all this to each of this make new object of html element and define that properties into it use it.

//? Polymorphism
// poly: many, morphism: form
// allow to get rid of log if and else or switch case
// Example: html -> text, select, check -> hidden, innerHTML, click(), focus() -> all has ability to render on page;
// we will make render method and add it into text -> render(), select -> render(), checkbox -> render(); => render method behave differently depending on type of object we referencing

// Element(text, check, select).render();
