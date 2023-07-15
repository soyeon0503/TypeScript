// interface

// readonly나 ?을 붙여서 읽기전용이나 선택적 프로퍼티로 정의할 수도 있다.
// 물론 내부에서 메소드를 정의할 수도 있다.
// 인터페이스안에서 호출 시그니쳐로 메소드를 정의할 때에는 앞에 이름을 붙여줘야 한다. 
// 메소드에 오버로딩을 구현하고 싶다면 호출 시그니쳐를 사용해야한다. 

interface Person{
    readonly name: string;
    age?: number;
    sayHi():  void;
 }

const person:Person = {
    name:'soyeon',
    age : 23,
    sayHi: function(){
        console.log('HI');
    },
};

console.log(person);


// 인터페이스 이름을 지을 때는 이름앞에 I 를 붙여주는 관습이 있는데 그건 각자 판단하자..