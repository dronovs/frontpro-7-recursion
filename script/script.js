function getArr () {
    const arr = [1,2,3,4,5,6,7];
    return function () {
        return arr;
    }
}

let numbers = getArr();

function sumArrEls (arr, index) {
    let result = 0;
    if (index) {
        return (result += arr[index] + sumArrEls(arr, index - 1));
    } else {
        return (result += arr[index]);
    }
}

console.log(sumArrEls(numbers(), 6));