let user = {
    id: 1,
    name: "soyeon.j"
};
// user.id; => object타입으로 지정하면 user라는 변수가 오브젝트 타입인건 알지만,
// 무슨 프로퍼티를 가지고 있는지 전혀 모른다
// 그래서 오류남 => 리터럴 문법과 같이 프로퍼티가 무슨 타입인지 하나하나 선언해줘야한다
// 객체를 선언할 때는 모든 프로퍼티들의 타입을 다 정의하는 리터럴 방식으로 한다
// let dog:{
//     name : string,
//     color : string,
// }={
//     name : "puppy",
//     color : "brown",
// };
// 객체를 사용하다보면 프로퍼티가 있어도 되고 없어도 되는 프로퍼티들이 있다.
// 이런 선택자들을 옵셔널 프로퍼티, 선택적 프로퍼티라고 하는데
// 프로퍼티 뒤에 ? 를 붙여주면 된다.
// user ={
//     name : "hey"
// };
// 불변의 값이 있다면 앞에 readonly를 붙여준다
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = "hacked"; readonly 값이므로 변경불가
