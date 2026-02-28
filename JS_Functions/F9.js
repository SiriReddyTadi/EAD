const secondLargest = (arr) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } 
        else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }
    return secondLargest;
};
console.log(secondLargest([10, 5, 20, 8, 15])); 
