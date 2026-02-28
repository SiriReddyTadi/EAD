const averageArray = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
};

console.log(averageArray([10, 20, 30, 40]));