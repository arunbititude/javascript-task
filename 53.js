function unit(mtx) {
    for (var i = 0; i < mtx.length; i++) {
        for (var j = 0; j < mtx.length; j++) {
            if ((i == j && mtx[i][j] != 1) || (i != j && mtx[i][j] != 0)) {
                return false;
            }

        }
    }
    return true;
}
console.log(unit([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));