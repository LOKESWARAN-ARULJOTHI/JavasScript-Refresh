const circle = {
    radius: 5,

    get areaOfCircle() {
        return Math.PI * this.radius * this.radius;
    },
    set setRadius(value) {
        this.radius = value;
    },
};

console.log(circle.areaOfCircle);
circle.setRadius = 10;
console.log(circle.areaOfCircle);
