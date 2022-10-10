// map to transform array
const arr = [5, 1, 3, 2, 6];

// double
// triple
// binary

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

// Double
let output = arr.map(double);
console.log(output);
// Triple
output = arr.map(triple);
console.log(output);
output = arr.map(binary);
console.log(output);

output = arr.map(function binary(x) {
  return x.toString(2);
});
output = arr.map((x) => {
  return x.toString(2);
});
console.log(output);
