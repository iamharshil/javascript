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
