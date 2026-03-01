function Employee(name, basicSalary, hra = 2000, ta = 1000) {
    this.name = name;
    this.basicSalary = basicSalary;
    this.hra = hra;
    this.ta = ta;

    this.calculateNetSalary = function () {
        const grossSalary = this.basicSalary + this.hra + this.ta;
        const tax = grossSalary * 0.10;
        const netSalary = grossSalary - tax;

        return {
            grossSalary, tax, netSalary
        };
    };
}

function generateSalary() {
    const nameInput = document.getElementById("name");
    const salaryInput = document.getElementById("basicSalary");

    const name = nameInput.value.trim();
    const basicSalary = Number(salaryInput.value);

    if (!name || basicSalary <= 0) {
        alert("Please enter valid details");
        return;
    }

    const employee = new Employee(name, basicSalary);
    const salaryDetails = employee.calculateNetSalary();

    const grossText = "Gross Salary: ₹" + salaryDetails.grossSalary.toFixed(2);
    const taxText = "Tax (10%): ₹" + salaryDetails.tax.toFixed(2);
    const netText = "Net Salary: ₹" + salaryDetails.netSalary.toFixed(2);

    document.getElementById("gross").textContent = grossText;
    document.getElementById("tax").textContent = taxText;
    document.getElementById("net").textContent = netText;
}