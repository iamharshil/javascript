// 1
// function calculatePrice(price, taxes, description) {
//     //! Nullish coalescing when value is null or undefiled then it will use second value
//     taxes = taxes ?? 0.05;
//     description = description ?? "default item";
//     const total = price * (1 + taxes);
//     console.log(`${description} with Tax: $${total}`);
// }
// calculatePrice(100, 0.07, "my item");
// calculatePrice(100, 0, "my item");
// calculatePrice(100, undefined, "");

//2
// console.log("%cHello", "font-weight: bold; color: red;");

//3
// optional chaining

// class Person {
//     constructor(name, address, hobbies) {
//         this.name = name;
//         this.address = address;
//         this.hobbies = hobbies;
//     }
//     print() {
//         console.log(this);
//     }
// }
//3.1
// function printPersonStreet(person) {
//     console.log(person.address.street);
// }
// what if we don't have address or hobbies
// const kyle = new Person(
//     "Kyle",
//     { street: "12345, main st", city: "somewhere" },
//     ["bowling", "weight lifting"]
// );
// printPersonStreet(kyle);
//3.2
// function printPersonStreet(person) {
//     console.log(person && person.address && person.address.street);
//     // or
//     // if (person && person.address) {
//     //     console.log(person.address.street);
//     // }
// }

// const kyle = new Person("Kyle", undefined, ["bowling", "weight lifting"]);
// kyle.print();

// // or

// printPersonStreet(undefined);

// 3.3

// function printPersonStreet(person) {
//     console.log(person?.address?.street); //. ? = does person exists
// }

// const kyle = new Person("Kyle", undefined, ["Bowling", "weight lifting"]); // {street: 'ind'}
// kyle.printName?.(); //if printName exist and its function
// kyle.print?.(); // if print exist and its function
// printPersonStreet(kyle);
// console.log(kyle.hobbies?.[0].toLowerCase());

// 4
const name = "Harsh";
const favoriteFood = "Rice";

const Harsh = {
    // name: name,
    // favoriteFood: favoriteFood,
    //or
    name,
    favoriteFood,
};
console.log(Harsh);
