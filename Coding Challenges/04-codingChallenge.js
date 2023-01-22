const calculate = bill => bill >= 30 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const bill = [275, 40, 430];
const tip = [calculate(bill[0]), calculate(bill[1]), calculate(bill[2])];
const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(total);
//Data 1: Test for bill values 275, 40 and 430
