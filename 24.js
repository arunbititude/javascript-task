var str = "Welcome";
var len = str.length;
if (len >= 3) {
    var result = lower(str);
}
else {
    var result = upper(str);
}
function lower(str) {
    var str1 = str.substring(0, 3);
    var str2 = str1.toLowerCase();
    var str3 = str.substring(3, len);
    return str2 + str3;
}
function upper(str) {

    return str.toUpperCase();
}
console.log(result);