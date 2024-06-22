
import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Shape from "./Shape";

const shape1 = new Shape(5, 10);
console.log(shape1.getInfo());

const shape2 = new Circle(5, 10, 10);
console.log(shape2.getInfo());
console.log(shape2.calculateArea());
shape2.printZero();

const shape3 = new Rectangle(5, 10, 5, 10);
console.log(shape3.getInfo());
console.log(shape3.calculateArea());
shape2.printZero();

