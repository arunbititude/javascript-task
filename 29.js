var str = "welcome";
var len = str.length;
function reverse(str1) {
    var str1 = "";
    for (var i = len - 1; i >= 0; i--) {
        str1 += str[i];
    }
    return str1;
}

console.log(reverse(str));