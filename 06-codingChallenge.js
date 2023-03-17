function calcTip() {
    const bill = [125, 555, 44];
    const randomElement = bill[Math.floor(Math.random() * bill.length)];
    const calculate = randomElement => randomElement >= 30 && randomElement <= 300 ? randomElement * 0.15 : randomElement * 0.20;
    const tip = calculate(randomElement);
    const total = calculate(randomElement) + randomElement;

    console.log(total);

}
calcTip()
//Test data: 125, 555 and 44//