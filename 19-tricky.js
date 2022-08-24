scope hoisting
var result = 1; // global scope | use in nested.

console.log(addOne(3))
console.log(result)

// because hoisting js goes for whole file and use this function even if it's declare after usage
function addOne(numToAdd) {
	result = result + numToAdd
	return result
}

// premitive and reference value
number 
string
boolean
symbol
null
undefined
bigint 
// any object in js is reference value
// immutable and share by copy | mutable and share by reference
var number = 1; 
console.log(number +2); //here number stay 1 and create new value
number = number + 3;

var person = {age:31}; // age 31 is ref value
var me =person;
person.age = 32; //we cannot add new one
console.log(me.age) // 32 because it's same pointer of value


// Closures
// function cloes its environmet when it closes
function gnm() {
	setTimeout(function() {
		console.log('hi' + person.age);
	}, 1500);
}

// allow to have private vairable into function
const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3