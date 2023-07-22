// mapped type

interface User {
    id : number;
    name : string;
    age : number;
}

// interface PartialUser {
//     id?: number;
//     name?: string;
//     age?: number;
// }

// Key가 id/name/age 일 수도 있다.(user index를 유니온 타입으로 선언)
// 뒤에 ?를 붙이면 선택적 프로퍼티가 된다.  [ key in "id" | "name" | "age"]?: User[key];
type PartialUser = {
    // [ key in "id" | "name" | "age"]: User[key];
    // boolean 타입으로 하기
    [ key in keyof User ]: boolean;
};


// 앞에 readonly를 붙이고 싶다면 
type ReadOnlyUser = {
    readonly [key in keyof User]: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser():User {
    // ...function
    return {
        id : 1,
        name : 'lee',
        age : 27,
    };
}

function updateUser(user:PartialUser){
    // ... 
}

updateUser({
    // id : 1,
    // name : 'lee',
    age : 25
});