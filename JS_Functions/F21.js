function Employee(name, salary) {
    this.name = name;
    this.salary = salary;

    this.netSalary = function() {
        let tax = this.salary > 50000 ? this.salary * 0.1 : this.salary * 0.05;
        return this.salary - tax;
    };
}

const emp = new Employee("Siri", 60000);
console.log(emp.netSalary());