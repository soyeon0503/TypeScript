// 조건부 타입
// extends 연산자와 삼항연산자를 사용하여 타입의 조건을 지정한다

type A = number extends string? string : number;


type ObjA = {
    a : number;
};

type ObjB = {
    a: number;
    b : number;
};

//  objB가 ojbA의 서브 타입인지 확인 한 후 맞음면 number 아니면 string 타입으로 지정한다
type B = ObjB extends ObjA ? number : string;

// 보통 제네릭과 같이 쓰인다
// T가  number 타입이면 string 타입으로 변환되고, string 타입이면 number 타입으로 정의된다
type StringNumberSwitch<T> = T extends number? string : number;

let bar : StringNumberSwitch<string> 

let bar2 : StringNumberSwitch<number>


function removeSpaces<T>(text : T) : T extends string ? string : undefined;
function removeSpaces(text : any){
    if(typeof text === 'string'){
        return text.replaceAll(" ", "")y;
    }else {
        return undefined;
    }
}

let result = removeSpaces('hi seoul');
result.toUpperCase();

let result2 = removeSpaces(2);
