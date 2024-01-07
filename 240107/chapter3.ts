/*
* 타입 추론
* 보통 에디터에는 우리가 타입을 선언하지 않아도 자동적으로 타입을 추론해주는 시스테임 있다
* 하지만 타입 추론이 불가능한 상황도 있다
* 매개변수를 선언할 때는 매개변수의 type을 직정 정의해주지 않는다
* */

let a = 10

let str = 'hello'

/*
* 위와 같이 기본 타입의 값을 선언하면 타입을 잘 추론한다
* */

let obj = {
    id: 1,
    name: 'jenny',
    profile: {
        nickname: 'jenny',
    },
    url : 'http://localhost:8080'
}

let { id, name, profile} = obj

let [one, two, three] = [1, 'hello', true]

// 함수의 매개변수는 초기값이 정의도이ㅓ 있다면 타입을 추론하지만 그렇지 않을 경우 타입을 추론하지 못한다
// function func(message) {
//     return 'hello'
// }

// 초기값이 없을 경우는 any타입으로 추론된다
let d
// 선언하면 number 타입으로 추론하고
d = 10
d.toFixed()
// 재선언하면 재선언하는 값의 타입으로 재추론된다
d = 'str'
d.toUpperCase()

// const로 선언된 변수들은 재선언될 일이 없으므로 기본 타입이 아닌 리터럴타입으로 추론된다
const number = 10