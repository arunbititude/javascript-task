var str = "welcome";
var str1 = "kerala";
function conc(x, y) {
    return x + y;
}
function remove(str, str1) {
    if (str1_len > str_len) {

        var z = str1.substring(0, str_len);
        return str + z;
    }
    else {
        var z = str.substring(0, str1_len);
        return z + str1;

    }

    return


}
var str_len = str.length;
var str1_len = str1.length;
if (str_len == str1.length) {
    console.log(conc(str, str1));
}
else {
    console.log(remove(str, str1));


}