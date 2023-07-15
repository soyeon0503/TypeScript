// 타입스크립트의 클래스

import { off } from "process";

// class constructor
// const employee = {
//     name : 'kim',
//     age : 27,
//     position : 'dev',
//     work(){
//         console.log('working...');
//     },
// };

// 타입스크립트의 클래스는 타입으로도 확인된다. 
class Employee{

    //필드
    name : string;
    age : number;
    position : string;

    constructor(name:string, age:number, position:string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // method
    work(){
        console.log('working..');
    }
}

const employeeB = new Employee('kim',23,'dev');
console.log(employeeB);

// 타입을 클래스로 지정한다면 모든 필드를 포함하여 정의해야한다. 
const employeeC :Employee = {
    name : '',
    age : 0,
    position : '',
    work(){}
}


class ExecutiveOfficer extends Employee {
    officeNumber : number;

    constructor(name:string, age : number, position : string, officeNumber:number){
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}