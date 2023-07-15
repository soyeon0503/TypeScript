// 배열
// statement1 : arr:type[]
let numArr:number[] = [1, 2, 3];
let strArr:string[] = ["hello", "im", "soyeon"];

// statement2 :arr:array<type>
let boolArr:Array<boolean> = [true, false, true];

// 배열에 들어갈 타입이 다양할 경우
let multiArr:(number|string)[]= [1, "hello"];

// 다차원 배열
let doubleArr:number[][] =[
    [1, 2, 3],
    [4, 5],
];

// Tuple
// 길이와 타입이 고정된 배열
let tup1:[number, number] = [1, 2];

let tup2:[number, string, boolean] = [1, "hey", true];

// 배열 메서드를 사용할 때(push / pop) 튜플의 길이 제한이 발동하지 않는다

// 튜플을 사용하느 경우 => 인덱스의 위치나 순서가 헷갈릴 때
const users:[string, number][]=[
    ["hey",1],
    // [3, "name"], 
];