// keyof 연산자

// interface Person {
//     name : string;
//     age : number;
// }

// person의 타입을 추출하여 Person에 대입한다. 
type Person = typeof person;

// 프로퍼티의 키의 타입을 정의할 때 유니온 타입으로 일일히 나열하는 것은 좋지 않다.
// 프로퍼티의 갯수가 언제 늘어나거나 줄어들지 모르기 때문이다. 
// 그래서 keyof 연산자를 쓰면 알아서 객체의 프로퍼티를 추출해준다. 프로퍼티의 개수가 많거나 이름이 바뀌는 등 변경이 있어도 걱정할 필요없다.
// keyof 연산자는 뒤에 <타입>이 와야한다. 
function getPropertyKey(person: Person, key: keyof Person){
    return person[key];
}

const person = {
    name : 'lee',
    age : 27,
}

getPropertyKey(person, 'name');
