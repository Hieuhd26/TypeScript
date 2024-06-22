class Student {
  id: number;
  name: string;
  grade: number;

  constructor(id: number, name: string, grade: number) {
    this.id = id;
    this.name = name;
    this.grade = grade;
  }
  public getInfor(): string {
    return `id :${this.id}, name: ${this.name}, grade: ${this.grade}`;
  }
  public getId(): number {
    return this.id;
  }
  public setId(newId: number) {
    if (newId >= 0) {
      this.id = newId;
    } else {
      console.log("Invalid id");
    }
  }

  public get Id(): number {
    return this.id;
  }
  public set set_Id(newId: number) {
    if (newId >= 0) {
      this.id = newId;
    } else {
      console.log("Invalid id");
    }
  }
}
const st1 = new Student(1, "hiệu", 10);

//console.log(st1.getInfor());

// console.log(st1.getId());
// st1.setId(-1);
// console.log(st1.getId());

console.log(st1.Id);
st1.set_Id=3;
console.log(st1.Id);

