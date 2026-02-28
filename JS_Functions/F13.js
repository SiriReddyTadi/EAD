function discountCalculator(discountPercent) {
    return function(price) {
        return price - (price * discountPercent / 100);
    };
}
console.log(discountCalculator(10)(500));