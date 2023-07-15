// 제네릭 인터페이스
//  제네릭 함수와 같이 타입 변수를 활용한다. 
interface KeyPair<K, V> {
    key : K;
    value : V;
}

// 제네릭 인터페이스는 함수와 달리 타입 변수에 타입을 직접 할당해줘야한다. 
let keyPair : KeyPair<string, number> = {
    key: 'key',
    value : 0,
};

let keyPair2 : KeyPair<boolean, string[]> = {
    key : true,
    value : ['1' , '2',' 3'],
}

// 인덱스 시그니처를 활용해서 제네릭 인터페이스를 정의할 수 있다. 
interface NumberMap {
    [key : string] : number;
}

let numberMap1:NumberMap = {
    key : -12,
    key2 : 23232,
};

interface Map1<V> {
    [key : string] : V;
}

let stringMap : Map1<string> = {
    key : 'value',
}

// 제네릭 타입 별칭
type Map2<V> = {
    [key : string] : V;
};

let stringMap2 : Map2<string> = {
    key : 'hello',
}

// 제네릭 인터페이스 활용 예시
// -> 유저 관리 프로그램 
// 유저 타입 : 학생 / 개발자

// interface User{
//     name : string;
//     profile : Student | Developer;
// }

interface User<T>{
    name : string;
    profile : T;
}

function goToSchool(user:User<Student>){
    // if(user.profile.type !== 'student'){
    //     console.log('error!');
    //     return;
    // }

    const school = user.profile.school;
    console.log(`welcome to ${school} univ!`);
}

interface Student {
    type : 'student';
    school : string;
}

interface Developer {
    type : 'developer';
    skill : string;
}

const devUser : User<Developer> = {
    name : 'kim',
    profile: {
        type : 'developer',
        skill : 'TypeScript',
    },
};

const StudentUser : User<Student> = {
    name : 'park',
    profile: {
        type : 'student',
        school : 'seoul',
    },
};