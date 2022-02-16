var x = 2;
var y = 9;
function near_100(a, b) {
    var num1 = (x * 10) + y;
    var diff1 = 100 - num1;
    var num2 = (y * 10) + x;
    var diff2 = 100 - num2;
    var num = (diff1 > diff2) ? num2 : num1;
    return num;


}
console.log(near_100(x, y));