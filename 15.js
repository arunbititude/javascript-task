var str = "welcome";
var len = str.length;
var new_str = "";
if (len >= 1) {
    var str1 = str.substring(1, len - 1);
    var str2 = str[len - 1];
    var str3 = str[0];
    console.log(str2 + str1 + str3);
}
