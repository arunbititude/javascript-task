var x = 1400;
function convert(x) {
    var hours = Math.floor(x / 60);
    var minutes = x % 60;
    return `Given time is ${hours} hour and ${minutes} minutes`;
}
console.log(convert(x));