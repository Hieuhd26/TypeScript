export class Student2 {
    constructor(private id: number, private name: string) {}
  
    public get getid(): number {
      return this.id;
    }
  
    public set setId(newId: number) {
      if (newId >= 0) {
        this.id = newId;
      } else {
        console.log("Invalid id");
      }
    }
    public getInfor(): string {
      return `id :${this.id}, name: ${this.name}`;
    }
  }
  
  const st2 = new Student2(1, "Hiệu");
  console.log(st2.getid);
  