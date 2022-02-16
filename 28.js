var x = 22;
var y = 21;
var z = 25;

if ((x >= 20 && (x < y || x < z)) || (y >= 20 && (y < x || y < z)) || (z >= 20 && (z < y || z < x))) {
    console.log(" satisfies the condition");
}
else {
    console.log("condition not satisfied");
}