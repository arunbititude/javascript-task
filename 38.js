var str = "welcome";
function three(str) {
    var str1 = str.substring(0, str.length - 3);
    var str2 = str.substring(str.length - 3, str.length);
    return str2 + str1;
}
if (str.length >= 3) {
    console.log(three(str));
}