var str = "welcome";
var count = 0;
function vowels(str) {

    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count += 1;
        }


    }
    return count;
}
console.log(vowels(str));
