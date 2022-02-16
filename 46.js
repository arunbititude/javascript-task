var arr = [5, 8, 10, 3, 4,];
k = 5;
function k_greatest(arr, k) {
    arr.sort((a, b) => b - a);
    return arr[k - 1];
}
console.log(k_greatest(arr, k))
