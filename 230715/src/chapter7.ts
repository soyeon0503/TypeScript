// 제네릭
// function func(value : any){
//     return value;
// }

// 제네릭 함수란
// 모든 타입에 두루두루 쓸 수 있는 함수이다. 
// <T> 는 타입 변수로, 인수의 타입에 따라 <T>의 값이 달라진다. 
// 제네릭함수의 타입은 호출되었을 때 결정된다. 
function func<T>(value:T):T{
    return value;
}

// 함수에서 인수의 타입은 any이지만 return 값의 타입은 뭘까?
// 아래 변수 num의 타입은 any일까? 우리는 매개변수로 숫자타입의 값을 넘겼으니 변수 num타입도 number이길 바랄 수도 있다.
let num = func(19);
let bool = func(true);
let string = func('string');

// 튜플같은 경우는
let tpl = func<[number, number, number]>([1, 2, 3]);