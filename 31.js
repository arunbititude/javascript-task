var str = "welcome to bititude";
// var len = str.length;
var str1 = str.split(" ");
for (var i = 0; i < str1.length; i++) {
    str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].substring(1);

}
var result = str1.join(" ");
console.log(result);