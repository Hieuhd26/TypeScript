import Shape from "./Shape";
class Circle extends Shape {
    constructor(public x:number, public y:number, public radius:number){
        super(x,y); 
    }
    calculateArea(): number {
        return Math.PI*this.radius*this.radius;
    }

    getInfo(): string {
        return `Hình tròn: ${super.getInfo()}, bán kính r = ${this.radius}`;
    }
}
export default Circle;
