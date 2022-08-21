// for for/in for/of while do while

// var num = 5;
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

const person = { fname: "john", lname: "Doe", age: 25 };
for (let x in person) {
    console.log(person[x] + " or " + x);
}
const students = ["John", "sara", "jack"];
for (element of students) {
    console.log(element);
}
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
