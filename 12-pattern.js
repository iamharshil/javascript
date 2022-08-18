// https://www.tutorialstonight.com/js/javascript-star-pattern

// 1:
var ptn = "";
for (var i = 0; i < 4; i++) {
    // for (var j = 0; j < 4; j++) {
    ptn += "* ";
    console.log(String(ptn));
    // }
}
console.log("---------------------------------------");
// 2
var n = 5;
var string = "";
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
        string += "* ";
    }
    string += "\n";
}
console.log(string);
console.log("---------------------------------------");
// 3
var n = 5;
var string = "";
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
        if (i === 0 || i === n - 1) {
            string += "*";
        } else {
            if (j === 0 || j === n - 1) {
                string += "*";
            } else {
                string += " ";
            }
        }
    }
    string += "\n";
}
console.log(string);
console.log("---------------------------------------");
