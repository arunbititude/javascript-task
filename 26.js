var x = 24;
var y = 22;
var z = 31;
function check_mode(x, y, z) {
    if (y > x && z > y) {
        return "strict mode";
    }
    else if (z > y) {
        return "soft mode";
    }
    else {
        return "unknown";
    }
}
console.log(check_mode(x, y, z));
