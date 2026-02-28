function calculateSalary(basic, bonus = 1000) {
    let netSalary = basic + bonus;
    if (netSalary > 50000) {
        netSalary -= netSalary * 0.1;
    }
    return netSalary;
}
console.log(calculateSalary(40000));