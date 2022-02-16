var str = "welcome";
var len = str.length;
var str1 = "";
function next_alpha(str) {
    for (var i = 0; i < len; i++) {
        if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
            str1 += String.fromCharCode(str.charCodeAt(i) + 1);


        }

    }
    return str1;
}
console.log(next_alpha(str));
