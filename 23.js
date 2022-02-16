var x = 96;
var y = 1196;
var z = 22336;
var last_x = x % 10;
var last_y = y % 10;
var last_z = z % 10;
if (last_x == last_y && last_y == last_z) {
    console.log("last digits are same");
}
else {
    console.log("Last digits does not match")
}