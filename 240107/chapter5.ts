/*
* 타입 좁히기
* 조건문 등을 통해 넚은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
* typeof 같은 표현을 타입 가드라고 부른다
*
* */

type Person = {
    name: string
    age: number
}

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살입니다
function func(value: number | string | Date | null | Person){
    if (typeof value === 'number') {
         console.log(value.toFixed())
    }else if (typeof value === 'string') {
        console.log(value.toUpperCase())
    }else if(value instanceof Date){
        console.log(value.getTime())
        //instanceof 는 왼쪽의 값이 데이트 객체냐 라고 물어보는 키워드 이므로 null 값이 조건을 충족할 수 없다
    }
   /* error => null 값이 통과할 수 있기 때문에 에러가 발생한ㄷ
    이 때는 instanceof 키워드를 사용한다
    else if(typeof value === 'object'){
        console.log(value.getTime())
    }*/
    // else if('age' in value) { error => value가 null일 수도 있으므로 에러가 발생하고 있다. 이럴 경우 value가 null이 아님을 보장해주면 된다
    else if (value && 'age' in value){
        console.log(`${value.name}은 ${value.age}살입니다`)
    }
   /* error => instanceof는 왼쪽의 값이 클래스의 인스턴스인지 확인하는 키워드이므로 클래스에만 쓸 수 있다
   person은 클래스가 아닌 객체 타입이므로 instanceof 키워드를 활용할 수 없다
    else if (value instanceof Person){
        console.log(`${value.name}은 ${value.age}살입니다`)
    }*/
}