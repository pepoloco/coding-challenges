const car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

const bmw = new car('BMW', 120);
const mercedes = new car('Mercedes', 95);
car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}
car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}
bmw.accelerate();
bmw.accelerate();