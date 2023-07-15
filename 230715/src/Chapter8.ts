// 첫번째 사례

// before
// function swap(a : any, b : any){
//     return [b , a];
// }

// after
// function swap<T>(a:T, b:T){
//     return [b, a];
// }

// ok
// const [a, b] = swap(1,2);

// error
// a가 string, b가 number 타입으로 한가지 타입값에 두가지 타입이 할당되어 오류가 발생한다. 
// const [a, b] = swap("1", 2);

// 여러 타입의 변수를 쓴다면 타입 변수를 더 선언해주면된다.
function swap<T, U>(a:T, b:U){
    return [b, a];
}

// ok
const [a, b] = swap("1", 2);

// 두번째 사례
// 매개변수가 배열일지 아닐지 예측하기 어려워 오류가 날 때에는 인수뒤에 []를 붙여주면 된다.
// function returnFirstValue<T>(data : T[]){
//     return data[0];
// }

// let num2 = returnFirstValue([0,1,2]);
// 0

// let str = returnFirstValue(['hello', 'myname']);
// hello

// 밑의 str 요수는 넘버와 스트링 타입의 유니온 타입으로 추론된다.
// str이 유니온 타입이 아닌 넘버타입으로 추론되길 원한다면
// 인수의 값을 튜플로 지정한다. 
// 첫번째 요소의 타입은 T이고 나머지 배열의 값 타입은 모르겠다,,라고 선언
function returnFirstValue<T>(data : [T, ...unknown[]]){
    return data[0];
}
let str = returnFirstValue([1, 'hello', 'myname']);

// 세번째 사례

// function getLength(data : any){
//     return data.length;
// }

// 제네릭함수를 사용하지만, 타입을 제한한다.
// 아래의 코드와 같이 제한한다면 숫자타입의 length라는 프로퍼티를 가지고 있는 타입만 인수로 받을 수 있다고 제한한다.

function getLength<T extends {length : number}>(data :T){
    return data.length;
}

let var1 = getLength([1,2,3]);

let var2 = getLength('hello');

let var3 = getLength({length : 29});

// let var4 = getLength(10);