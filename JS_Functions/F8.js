const checkPrime = function(num){
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNumbers = function(arr){
    let primes = [];

    for (let num of arr) {
        if (checkPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
};
console.log(primeNumbers([1,2,3,4,5,6,7]));