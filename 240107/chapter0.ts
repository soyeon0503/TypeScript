/*
* unknown 타입
* unknown은 모든 타입의 부모격인 super 타입이기 때문에 변수가 정의되어 있으면 모든 타입의 값을 넣을 수 있다
* unknown타입의 값은 업캐스팅은 되는데 다운 캐스팅은 안된다 ( undefined->number/string/...etc but number->undefined X)
* */
function unknownType() {
    let a:unknown = 1
    let b:unknown = 'hello'
}

/*
* never타입
* never타입은 모든 타입의 서브 타입으로 모든 집합의 부분집합인 공집합이다
* never타입도 마찬가지로 업캐스팅은 가능하지만 다운캐스팅은 안된다
* 이런 never타입은 어떤 값도 저장되어서는 안 되는 변수 타입으로 활용한다
* */

function neverType() {
    function neverFunc():never {
        while(true) {}
    }

    let num:number = neverFunc()
    let str:string = neverFunc()
}

/*
* void타입
* void는 undefined의 부모타입이므로 void타입의 변수에 undefined 값을 선언하는 것이 가능하다
*/

function voidType(){
    function voidFunc(){
        console.log('hi')
        return undefined
    }

    let voidVar:void = undefined
}

/*
* any타입
* any타입은 모든 타입의 supertype이자 모든 타입의 subtype이다
* any타입 한정 undefined 다운 캐스팅이 가능하다
* 아무타입이나 대입해도 에러가 나지 않기때문에 보통 lint에서 any타입 사용하지 못하게 하는거 같다(좀 짜증남)
* */

function anyType(){
    let unknownVar:unknown
    let anyVar:any
    let undefinedVar:undefined

    anyVar = unknownVar
    undefinedVar = anyVar
}