var mtx = [[1, 0, 0], [1, 2, 0], [1, 2, 3]]
function lower_triangular(mtx) {
    for (var i = 0; i < mtx.length; i++) {
        for (var j = 0; j < mtx.length; j++) {
            if (j > i && mtx[i][j] != 0) {
                return false;
            }

        }
    }
    return true;
}
console.log(lower_triangular(mtx));
