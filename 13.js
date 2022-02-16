var str = "hello";
var added_str = "";
if (str.substring(0, 2) == "py") {
    added_str = str;
}
else {
    added_str = "py" + str;
}
console.log(added_str);
