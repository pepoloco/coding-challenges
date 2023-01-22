function solve() {
    const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    let tips = [];
    let totals = [];
    const calculate = function (bill) {
        return bill >= 30 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    };
    for (let i = 0; i < bills.length; i++) {
        const tip = calculate(bills[i])
        tips.push(tip);
        totals.push(tip + bills[i]);
    }
    const calcAverage = (arr) => {
        let avgTip = 0;
        for (let i = 0; i < arr.length; i++) {
            avgTip += arr[i];
        }
        return avgTip / arr.length;
    }
    console.log(calcAverage([2, 3, 7]));
    console.log(calcAverage(tips));
    console.log(calcAverage(totals));
}
solve()