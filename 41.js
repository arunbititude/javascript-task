var a = [9, 2, 3, 4, 5, 6, 7, 1];
function check(a) {
    if (a.length >= 1) {
        if (a[0] == 1 || a[a.length - 1] == 1) {
            return 'condition satisfied';
        }
        else {
            return 'not satisfied';
        }
    }
}
console.log(check(a));