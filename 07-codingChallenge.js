function measure() {
    const measures = {
        name: "John Smith",
        mass: 78,
        height: 1.69,
        calcBMI: function () {
            return this.mass / this.height * 2;
        }
    }
    const measures2 = {
        name: "Mark Miller",
        mass: 92,
        height: 1.95,
        calcBMI: function () {
            return this.mass / this.height * 2;
        }
    }
    if (measures.calcBMI() > measures2.calcBMI()) {
        console.log(`${measures.name} BMI ${measures.calcBMI().toFixed(2)} is higher than ${measures2.name} ${measures2.calcBMI().toFixed(2)}`);
    } else if (measures.calcBMI() < measures2.calcBMI()) {
        console.log(`${measures2.name} BMI ${measures2.calcBMI().toFixed(2)} is higher than ${measures.name} ${measures.calcBMI().toFixed(2)}`);
    } else {
        console.log("It's a draw!");
    }
};
measure();
// BMI = mass / height ** 2 = mass (height * height) (mass in kg and height in meter