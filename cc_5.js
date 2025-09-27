// Coding Challenge 05
// Step 1 - Complete

// Step 2
let employees = [
    {name: "Joe Shmo", hourlyRate: 20, hoursWorked: 40},
    {name: "Karen Hilt", hourlyRate: 15, hoursWorked: 30},
    {name: "Josh Tho", hourlyRate: 32, hoursWorked: 35},
    {name: "Martin Hank", hourlyRate: 12, hoursWorked: 25},
];
console.table(employees) // table for employees

// Step 3
let calcBasePay = (rate, hours) => 
    rate * Math.min(hours, 40);

console.log(` $20 an hour for 40 hours: $${calcBasePay(20, 40)}`); // test function

// Step 4
function calcOTPay(rate,hours) {
    if (hours > 40) {
        return (hours - 40) * (rate * 1.5); 
    } else {
        return 0;
    }
}
console.log(`OT pay for 10 hours @ $40 an hour: $${calcOTPay(40,50)} `); // test function

// Code goes here