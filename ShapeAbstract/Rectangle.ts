import Shape from "./Shape";

class Rectangle extends Shape{
    constructor(public x:number, public y:number, public width:number, public height:number){
        super(x,y);
    }
    calculateArea(): number {
        return this.width*this.height;
    }

    getInfo(): string {
        return `Hinh chữ nhật: góc trái trên ${super.getInfo()}, chiều dài: ${this.width}, chiều rộng: ${this.height}`;
    }
}

export default Rectangle;