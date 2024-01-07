// 열거형 (Enum 타입)
// 여러가지 값에 각지 이름을 부여해 열거해두고 사용하는 타입
// 열거형을 사용하는 이유는 예제와 같이 0번은 관리자, 1번은 유저, 2번은 게스트라는 룰이 있을 대
// 개발자가 헷갈리거나 커뮤니케이션의 오류로 다른 숫자를 지정해버릴 경우가 있을 수 있다
// 그런 오류들이 발생하는 것을 방지하기 위해 사용한다
// 라인 블로그를 봤는데 자바스크립트로 컴파일링 될 때 tree-shaking 에 안걸려서 오류감지가 안된다고 하니 안 쓰는게 좋다고한다
// 쓰고 싶다면 유니온 타입을 권장한다(24.01.07)

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

// const user = {
//     name : "sy",
//     role : 0, //관리자
// }

// const user2 ={
//     name : "gildong",
//     rol : 1 //일반유저
// }

// const guest = {
//     name : 'guest',
//     rol : 2 //게스트
// }\

const user = {
    name : "sy",
    role : Role.ADMIN, //관리자
}

const user2 ={
    name : "gildong",
    rol : Role.USER //일반유저
}

const guest = {
    name : 'guest',
    rol : Role.GUEST //게스트
}