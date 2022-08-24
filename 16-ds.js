// allow to manage data.
// built-in: Array, Objects, Maps, Sets;
// 1: [1, 2, 3];
// 2: { name: "max", age: 31}
// 3: new Map() map.set('a','b')
// 4: new Set() set.add(1);

// Why
// different task diff ds
// Task:
// order(not sorted but index is fixed) list data, duplicate allow
// unordered list data, no duplicate
// key-value unordered
// key-value ordered, iterable

/* ARRAY
- insertion order is kept
- element access via index
- iterable (can use for loop)
- size(length) adjust dynamically
- duplicate allow
- delete and find require extra work
*/
// example:
const names = ["max", "Manu", "Julie", "max"];
console.log(names[1]);
// iterable
for (const el of names) {
    // i can do el in names for index
    console.log(el);
}
names.push("Julie");
console.log(names.findIndex((el) => el === "Julie"));
names.splice(2, 1);
console.log(names);


// sets
// insertion order is not stored/memorized
// element access and extraction via method
// iterable (use for of loop)
// size adjest dynamically
// duplicates are not allowed
// deletion and finding is fast trival

var ids = new set();
ids.add('abc')
ids.add(1);
ids.add('bb2')
ids.add(1)
for (var el of ids) {
    console.log(el);
}

console.log(ids.has('123'));
ids.delete('bb2');

console.log(ids)



// array vs sets
// use as array | only if order doesn't matter
// must use if order matter | can simply data access


// object
// unordered key value paris of data
// element acces via key
// not iterable only with (for in)
// key are unique values are not
// key has to be nubmer string or symbol
// can store data & functionality (method)


var person = { fname: "Max", age: 31, hobbies: ["Sports", "Cooking"]}
console.log(person[0])
console.log(person['fname'])