var str = "javaScripttutorial";
var len = str.length;;
var str1 = str.substring(4, 10);
function check_script(str1) {
    if (str1 == "Script") {

        var str2 = str.substring(0, 4);
        var str3 = str.substring(10, len);
        return str2 + str3;
    }
    else {
        return str;
    }


}
var result = check_script(str1);
console.log(result);
