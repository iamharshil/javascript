var arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
    var positive = 0;
    var negative = 0;
    var zero = 0;
    for (var n of arr) {
        if (n > 0) {
            positive++;
        } else if (n == 0) {
            zero++;
        } else {
            negative++;
        }
    }
    function ln(n) {
        return n / arr.length;
    }
    console.log(ln(positive));
    console.log(ln(negative));
    console.log(ln(zero));
}
plusMinus(arr);
