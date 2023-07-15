//  any 어떤 변수의 타입을 우리가 확실히 모를 때 사용하는 타입ㅈ
// let anyVar = 10;
// abyVar = "hi";
// 범용적으로 써야하는 변수일 때 any타입을 써서 여러 타입을 담을 수 있따,
// 그냥 자스 벼수 처럼 쓰는 듯...
let anyVar = 10;
anyVar = "hi";
anyVar = true;
anyVar = {};
// unknown
let unknownVar;
unknownVar = "";
unknownVar = 12;
unknownVar = () => { };
export {};
// unknown타입은 모든타입의 값을 할당할 수 있지만 unknown타입을 다른 변수에 할당할 수는 없다.
// 메서드 활용이나 연산도 불가능하다.
// 만약 일반 변수처럼 쓰고 싶다면 조건문으로 타입을 보장해줘야한다. 
