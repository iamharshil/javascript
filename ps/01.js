//? 1. Print all even from 1 to 10;
let arr = [];
for (var i = 0; i < 10000; i++) {
    if (i % 2 == 0) {
        arr.push(i);
    }
}
console.log(arr);

//? 2.print table
arr = [];
function table(of) {
    for (var i = 1; i <= 10; i++) {
        let total = of * i;
        console.log(`${of} * ${i} = ${total}`);
    }
}
table(10);

//? converter
function convert(km) {
    return km * 0.6213;
}
console.log(convert(3));

//? calculate sum of arr
arr = [1, 2, 4, 3, 5];
let total = 0;
function a(array) {
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
console.log(a(arr));
let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);

//? sort arr
let sorted = arr.sort();
console.log(sorted);

//? remove string
let str = "      Hello     ";
console.log(str.trim());

//? divisible
let _10 = 10;
function divisible(inp) {
    if (inp % 10 == 0) {
        return true;
    }
    return false;
}

console.log(divisible(10));

//? return number of vowels in string
