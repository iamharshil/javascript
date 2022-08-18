// const person = {
//     firstname: "Harsh",
//     lastname: "here",
//     fullName() {
//         return `${person.firstname} ${person.lastname}`;
//     }
// }

// `` this is back tick
// console.log(person.fullName());

// This has problem cuz it's read only,
// so we cannot change person.name from outside.

// getters and setters
// getters => access properties
// setters => change (mutate) them.

// solution with getter and setter
const person = {
    firstname: "Harsh",
    lastname: "here",
    get fullName() {
        return `${person.firstname} ${person.lastname}`;
    },
    //set needs parameters
    set fullName(value) {
        const parts = value.split(" "); //array of it.
        this.firstname = parts[0];
        this.lastname = parts[1];
    },
};
person.fullName = "World hello";
console.log(person);
