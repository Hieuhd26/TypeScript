class Shape{
    constructor(public x:number, public y:number){
    }
    calculateArea(): number{
        return 0;
    }

    getInfo():string {
        return `Tọa độ: X(${this.x}, ${this.y})`;
    }

    printZero(){
        console.log("Zero");
    }

    // public private protected readonly
}

export default Shape;