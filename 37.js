var str1 = "manchester";
var str2 = "united";
function concatenate(x, y) {
    var str3 = x.substring(1, x.length);
    var str4 = y.substring(1, y.length);
    return str3.concat(str4);
}
console.log(concatenate(str1, str2));