function processArray(arr, callback) {
    let result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}
console.log(processArray([1,2,3], x => x * 2));