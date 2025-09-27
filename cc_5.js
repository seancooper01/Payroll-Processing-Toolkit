// Coding Challenge 05
// Step 1 - Complete

// Step 2
let employees = [
    {name: "Joe Shmo", hourlyRate: 20, hoursWorked: 50},
    {name: "Karen Hilt", hourlyRate: 15, hoursWorked: 30},
    {name: "Josh Tho", hourlyRate: 32, hoursWorked: 35},
    {name: "Martin Hank", hourlyRate: 12, hoursWorked: 55},
];
console.table(employees) // table for employees

// Step 3
let calcBasePay = (rate, hours) => 
    rate * Math.min(hours, 40);

console.log(`$20 an hour for 40 hours: $${calcBasePay(20, 40)}`); // test function

// Step 4
function calcOTPay(rate,hours) {
    if (hours > 40) {
        return (hours - 40) * (rate * 1.5); 
    } else {
        return 0;
    }
}
console.log(`OT pay for 10 hours @ $40 an hour: $${calcOTPay(40,50)} `); // test function

// Step 5
function calcTaxes(grossPay) {
    return grossPay * 0.15; // returns tax amount 
};

// Step 6
function processPayroll(employee) {
    let basePay = calcBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calcOTPay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let taxes = calcTaxes(grossPay);
    let netPay = grossPay - taxes; 

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay, 
        grossPay: grossPay,
        netPay: netPay,
        taxes: taxes
    };
}
/* test step 6
console.log('Step 6 Testting:');
let testEmployee = (employees[0]);
console.log(processPayroll(testEmployee));
*/ 



// Code goes here