// 타입스크립트의 클래스
// class constructor
// const employee = {
//     name : 'kim',
//     age : 27,
//     position : 'dev',
//     work(){
//         console.log('working...');
//     },
// };
class Employee {
    //필드
    name;
    age;
    position;
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // method
    work() {
        console.log('working..');
    }
}
const employeeB = new Employee('kim', 23, 'dev');
console.log(employeeB);
export {};
