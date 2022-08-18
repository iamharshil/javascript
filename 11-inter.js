let data = [4, 7, 1, 4, 9, 2, 4, 1];
console.table(data);

// q1: change length to 3;
// sol 1:
// data.length = 3;
// sol 2:
// data.splice(3, data.length);
// console.log(data);

// q2: sum
// sol 1:
// console.log(data.reduce((x,y) => x + y));

//  q3: duplicate
// sol 1:
// let unique = new Set(data);
// console.log([...unique]);

// q4: , coma operator
// let x = 10;
// x = (x+=10,x); //first calculation then log
// console.log(x);
// x = (x+10,10);
// console.log(x);

// q5: swap value using destructuring
let x = 10,
    y = 20;
[x, y] = [y, x];
console.log(x, y);

// for (var i = 0; i < 4; i++){
//   for (var j = 0; j <= 4-i+1; j--) {
//     console.log("* ");
//   }
// }
