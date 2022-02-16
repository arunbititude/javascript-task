var a = [1, 2, 6, 4, 6, 6, 7];
var difference = a[a.length - 1] - a[0];
var new_a = [];
for (i = 0; i < a.length; i++) {
    if (a[i] == difference) {
        new_a.push(a[i]);
    }
}
console.log(new_a);