// 접근 제어자(access modifier)
// public private protected

class Employee{

    //필드
    private name : string;
    protected age : number;
    public position : string;

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

class ExecutiveOfficer extends Employee{

    //필드
    constructor(name:string, age:number, position:string){
        super(name, age, position);
    }

    // method
    work(){
        console.log(`my age ${this.age}`);
    }
}

// 접근제어자는 디폴트로 public 이다.
// 접근제어자가 public일 때, 우리는 자유롭게 인스턴스의 프로퍼티에 접근할 수 있다.
const employee = new Employee('lee', 23, 'dev');
// 프로퍼티의 접근제어자가 private일 때는 클래스 외부에서 접근할 수 없다. 오로지 클래스 내에서만 액세스 할 수 있다. 
// 심지어 상속받는 파생 클래스에서도 접근할 수 없다. 
// employee.name = 'park';

// 프로퍼티의 접근제어자가 protected 일때는 외부에서는 접근할 수 없지만 상속받는 파생클래스에서는 접근할 수 있다. 
// employee.age = 30;
employee.position = 'hr';
console.log(employee);


// 만약 생성자에서 접근자를 달면, 타입스크립트가 자동으로 필드로 만들기 때문에 필드를 선언해줄 필요가 없다.
// 심지어 필드 초기화 선언작업도 한다. 생성자에서 해줄 각각 초기화 작업을 해줄 필요도 없다!