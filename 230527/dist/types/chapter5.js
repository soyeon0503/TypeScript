// 열거형 (Enum 타입)
// 여러가지 값에 각지 이름을 부여해 열거해두고 사용하는 타입
// 열거형을 사용하는 이유는 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
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
    name: "sy",
    role: Role.ADMIN, //관리자
};
const user2 = {
    name: "gildong",
    rol: Role.USER //일반유저
};
const guest = {
    name: 'guest',
    rol: Role.GUEST //게스트
};
export {};
