var a = [4, 5, 7];
function rotate(a) {
    return [a[2], a[0], a[1]]
}
if (a.length == 3) {
    console.log(rotate(a));
}