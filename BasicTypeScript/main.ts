import { School } from "./School2";
import { Student2 } from "./Student2";

const mySchool= new School("Khúc THừa Dụ");
const st3 = new Student2(1,"Hưng");
const st4= new Student2(2,"Huê");
const st5 = new Student2(3,"Hoa");
mySchool.addStudent(st3);
mySchool.addStudent(st4);
mySchool.addStudent(st5);

let st = mySchool.getStudent(1);
console.log(st!==undefined?st.getInfor():"undefined");
console.log("--------------");

mySchool.listStudent();


