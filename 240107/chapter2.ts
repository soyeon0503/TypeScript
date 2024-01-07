/*
* 대수타입
* -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
* 합집합 탕팁과 교집합 타입이 존재한다
* */

/*
* 1. 합집합 - Union타입
* */

let a:string | number
a = 1
a = 'hello'

//객체 타입의 Union타입

let arr:(number|string|boolean)[] = [1, 'hello, true']

type Dog ={
    name: string
    color : string
}

type Person = {
    name: string
    language: string
}

type Union1 = Dog | Person

let union1 : Union1 = {
    name: 'union1',
    color : 'black'
}

let union2 : Union1 = {
    name: 'union2',
    language: 'ko'
}

let union3: Union1 = {
    name:'union3',
    color: 'brown',
    language: 'ko'
}

// dog 타입에 포함되려면 color를 Person타입에 포함되려면 language 프로퍼티를 가지고 있어야하는데
// color나 language 프로퍼티를 가지고 있지 않기 때문에 어디에도 속할 수 없기 때문에 에러가 발생한다
// let union4: Union1 = {
//     name: 'union4'
// }


/*
* 2. 교집합 타입 - Intersection 타입
* 기본타입들은 공통 타입이 없기때문에 never타입이 된다. 그래서 보통 객체 타입의 변수에 많이 사용된다
* */

let variable: number & string

type Cat = {
    name: string
    color: string
}

type Animal = {
    name: string
    gender: string
}

type Intersection = Cat & Animal

// 교집합이므로 name, color, gender 프로퍼티를 다 포함해야한다
let intersection : Intersection = {
    name: '',
    color : '',
    gender: ''
}