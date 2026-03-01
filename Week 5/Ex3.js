function isPalindrome(num) {
    const str = num.toString();
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

function isArmstrong(num) {
    const digits = num.toString().split("");
    const power = digits.length;

    let sum = 0;
    for (let digit of digits) {
        sum += Math.pow(Number(digit), power);
    }

    return sum === num;
}

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function factorial(num) {
    if (num < 0) return "Not defined";

    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

function analyzeNumber() {
    const number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number)) {
        alert("Please enter a valid number");
        return;
    }

    document.getElementById("palindromeResult").textContent =
        `Palindrome: ${isPalindrome(number) ? "Yes" : "No"}`;

    document.getElementById("armstrongResult").textContent =
        `Armstrong: ${isArmstrong(number) ? "Yes" : "No"}`;

    document.getElementById("primeResult").textContent =
        `Prime: ${isPrime(number) ? "Yes" : "No"}`;

    document.getElementById("factorialResult").textContent =
        `Factorial: ${factorial(number)}`;
}