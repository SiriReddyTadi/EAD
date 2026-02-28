function simpleInterest(principal, time, rate = 5) {
    return (principal * time * rate) / 100;
}
console.log(simpleInterest(1000, 2));