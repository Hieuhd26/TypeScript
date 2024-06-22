import { Student2 } from "./Student2";
export class School {
  private students: Student2[] = [];
  constructor(public name: string) {}
  public addStudent(student: Student2) {
    this.students.push(student);
  }
  public getStudent(id: number): Student2 | undefined {
    let arr = this.students.filter((student) => student.getid === id);
    return arr.length > 0 ? arr[0] : undefined;
  }
  public listStudent() {
    console.log("ds sinh viên");
    this.students.forEach((student) => {
      console.log(student.getInfor());
    });
  }
}
