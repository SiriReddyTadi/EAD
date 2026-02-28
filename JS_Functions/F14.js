function taxGenerator(rate) {
    return function(income) {
        return income * rate;
    };
}

console.log(taxGenerator(0.2)(50000));