class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}km/h`)
    };
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed}km/h`)
    };
    get speedUS() {
        return this.speed / 1.6;
    };
    set speedUS(speed) {
        this.speed * 1.6;
    };
}

const bmw = new CarCl('BMW', 120);
bmw.accelerate();
console.log(bmw.speedUS);
bmw.accelerate();
bmw.speed = 50;
console.log(bmw)
bmw.accelerate();