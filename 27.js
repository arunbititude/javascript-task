var x = 92;
var y = 1192;
var z = 22332;
var last_x = x % 10;
var last_y = y % 10;
var last_z = z % 10;
if ((last_x == last_y || last_y == last_z || last_x == last_z) || (last_x == last_y && last_y == last_z)) {
    console.log("last digits of either two or all are same");
}
else {
    console.log("Last digits does not match")
}