var str = "welcome";
var char = 'e';
function check(char) {
    if (str[1] == char || str[2] == char || str[3] == char) {
        return true;
    }
    else {
        return false;
    }
}
var flag = check(char);
console.log(flag);