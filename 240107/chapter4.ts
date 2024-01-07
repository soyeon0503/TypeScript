/*
* 타입 단언 - type assertion
* */

type Person = {
    name: string
    age: number
}

/*
* 만약 객체를 초기화하지 않고 나중에 선언하고 싶다면 as 키워드를 이용하면 된다
* 값 뒤에 as 키워드를 사용하고 typemㅇㄹ 명시하면 typescript 컴파일러에세 이 타입으로 간주하라고 알려준다

*/
let person = {} as Person

// person.name= 'lee'
// person.age = 25


let personObj = {
    name: 'person',
    age : 25
}

person = personObj

/*
* 타입 단언에는 규칙 이 있는데
* ex) let num = A as B
* A는 B의 슈퍼타입이거나 A가 B의 서브타입이여야 한다
* */

// never은 모든 타입의 서브 타입
let num1 = 10 as never

// unknown 은 모든 타입의 super 타입
let num2 = 10 as unknown

/*
error
let num3 = 10 as string
위의 에러를 해결하려면 이중 단언을 해주면 된다
*/
let num3 = 10 as unknown as string


/*
* const 단언
* 변수를 read-only로 선언하고 싶다면 값 뒤에 as const를 붙여주면 된다
* */
let cat = {
    name: 'kitty',
    color: 'yellow'
} as const

// 수정 불가
// cat.name = 'kirby'

/*
* Non null 단언
* */

type Post = {
    title : string
    author?: string
}

let post:Post = {
    title : 'title1',
    author : 'lee'
}

// 옵셔널 체인징을 사용하고 있기 때문에 에러가 발생한다
// 이럴 때 non null 선언을 사용할 수 있는데 물음표를 느낌표로 바꾸면 된다
const len: number = post.author!.length;