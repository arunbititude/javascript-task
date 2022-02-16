var number = 25;
var arr = []

for (var i = 3; i <= number; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (flag == 0) {

        arr.push(i);
    }
}
arr.sort((a, b) => b - a)
console.log(arr);