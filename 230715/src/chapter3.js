// 자바스크립트 클래스 소개
let studentA = {
    name : 'lee',
    grade : 'A',
    age : 12,
    study(){
        console.log('studying');
    },
    introduce(){
        console.log('hi');
    },
};

class Student {
    // field
    name;
    grade;
    age;

    // constructor
    // 생성자 호출하여 인수를 객체의 프로퍼티로 지정하기
    constructor(name, grade, age){
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // method
    study(){
        console.log('studying');
    }

    introduce(){
        console.log('hi');
    }
}

// 정의한 클래스의 생성자를 호출하여 인스턴스 생성하기
// let studentB = new Student('kim','b',27);
// studentB.study();
// studentB.introduce();


// 아래의 StudentDeveloper 클래스는 Student클래스와 중복되는 코드들이 너무 많다.
// 이런건 좋지 않기 때문에 Student 클래스를 상속받아 작성하는 것이 좋다. 
// class StudentDeveloper {
//     name;
//     grade;
//     age;
//     favoriteSkill;

//     constructor(name, grade, age, favoriteSkill){
//         this.name = name;
//         this.grade = grade;
//         this.age = age;
//         this.favoriteSkill = favoriteSkill;
//     }
//     study(){
//         console.log('studying');
//     }

//     introduce(){
//         console.log('hi');
//     }

//     programming(){
//         console.log(`${this.favoriteSkill} ing... `);
//     }
// }

class StudentDeveloper extends Student {
    favoriteSkill;
    programming(){
        console.log(`${this.favoriteSkill} ing... `);
    }
    constructor(name, grade ,age, favoriteSkill){
        // 부모 클래스의 생성자 함수를 호출한다. 
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

}

let studentDeveloper = new StudentDeveloper('park','c',23,'typescript');
console.log(studentDeveloper);
studentDeveloper.study();
studentDeveloper.introduce();
studentDeveloper.programming();