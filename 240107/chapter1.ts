/*
객체타입간의 호환성 -> 어떤 객체타입을 다른 개체타입으로 취급해도 괜찮은가?
공통분모르 가진 타입에서 업캐스팅은 가능하지만 다운 캐스팅은 불가능하다
* */

type Animal = {
    name:string
    color:string
}

type Dog = {
    name:string
    color:string
    breed:string
}

let animal:Animal = {
    name: 'cat',
    color: 'cheese'
}

let dog:Dog ={
    name : 'popo',
    color: 'white',
    breed: 'jindo'
}

animal = dog

// dog = animal

type Book = {
    name: string
    price: number
}

type ProgrammingBook = {
    name: string
    price: number
    skill: string
}

let book:Book
let programmingBook:ProgrammingBook = {
    name: 'typescript',
    price: 3300,
    skill: 'reactjs'
}
book = programmingBook
// programmingBook = book

/*
 * 초과프로퍼티 검사
 * 객체 타입 변수를 초기화할 때 객체 리터럴을 사용하면 정의해놓지 않은 프로퍼티를 작성했을 때 에러가 발생한다
 * 이런 에러를 피하려면 새로운 변수를 만들고 미리 선언해두었던 객체를 넣으면 초과 프로퍼티 검사를 피할수 있다
 * 아래 예제와 같이 book2는 에러가 나지만 book3는 에러가 발생하지 않는다
 */

let book2:Book ={
    name: 'react',
    price: 3000,
    // skill: 'reactjs'
    //error : is not assignable to type Book
}

let book3:Book = programmingBook

/*
함수 파라미터로 전달되는 객체도 마찬가지 이다
리터럴 객체로 전달하면 초과 프로퍼티 검사가 발동되지만 변수로 선언하면 발동되지 않는다
* */

function func(book:Book) {
}

// error
func({
    name: 'typescript',
    price: 3300,
    // skill: 'reactjs'
});

func(programmingBook)