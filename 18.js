var str = "welcome";
var len = str.length;
if (len >= 3) {
    var str1 = str.substring(len - 3, len);
    var new_str = str1 + str + str1;
    console.log(new_str);
}