interface Animal {
    name : string;
    age : number;
}

// Dog/Cat/Chicken 인터페이스에서 이름과 나이의 프로퍼티가 다 겹친다. 
// 중복된 프로퍼티들을 다 정의하는 것은 불필요한 행동이기 때문에 우리는 다른 방법으로 정의해야할 필요가 있다. 
// interface Dog {
//     name : string;
//     age : number;
//     isBark : boolean;
// }

// interface Cat{
//     name : string;
//     age : number;
//     isScratch : boolean;
// }

// interface Chicken {
//     name: string;
//     age : number;
//     isFly : boolean;
// }

// 공통된 프로퍼티를 가지고 있는 Animal 인터페이스를 만들고 상속받는다.
// 상속받는 인터페이스는 상속해주는 인터페이스의 프로퍼티를 다 가지고 온다. 
// 상속받는 인터페이스는 부모의 프로퍼티의 타입을 재정의할 수 있다. 아무타입으로 바꿀 수 있는 건 아니고 부모 프로퍼티 타입의 서브 타입이여야한다. 
interface Dog extends Animal{
    isBark : boolean;
}

interface Cat extends Animal{
    // name : 'caaattttt';
    color : "";
    isScratch : boolean;
}

interface Chicken extends Animal{
    isFly : boolean;
}

const dog:Dog = {
    name: 'puppy',
    age :1,
    isBark : true,
};

// 다중상속
interface DogCat extends Dog, Cat { }

const dogCat : DogCat = {
    name : "",
    age : 12,
    color : "",
    isBark : true,
    isScratch : true,
}