const numbersArr = [1,2,3,4,5,6,7];

function sumArrEls (arr, index) {
    let result = 0;
    if (arr[index] >= 0 && arr[index] <= arr.length) {
        result += arr[index] + sumArrEls(arr, index-1);
    } else {
        return 0;
    }
    return result;
}

console.log(sumArrEls(numbersArr, 6));