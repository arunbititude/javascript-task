var num = 20;
function factorial_count(num) {
    var fact = 1;
    for (var i = num; i >= 2; i--) {
        fact = fact * i;

    }
    var count = 0;
    while (fact % 10 == 0) {
        count += 1;
        fact = fact / 10;
    }
    return count;
}


console.log(factorial_count(num));