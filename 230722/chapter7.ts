// 분산적인 조건부 타입

// type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 타입 변수에 유니온 타입을 할당하게 되면 한번은 넘버, 한번은 문자열 타입으로 분산되어 생성된다
// 5, 6 라인코드를 한줄로 만든 거랑 똑같,,,
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean| number| string>;
// 1단계 
// StringNumberSwitch<boolean> | StringNumberSwitch<number> | StringNumberSwitch<string>

// 2단계
// number|string|number

// number|string

// 유니온에서 특정 타입만 제거하는 경우
type Excludes<T, U> = T extends U? never : T;

type AA = Excludes<number| string| boolean, string>;
// 1단계
// Excludes<number, string> |
// Excludes<string, string> |
// Excludes<boolean, string>

// 2단계
// number |
// never | 
// boolean

// 결과
// number|never|boolean => number | boolean



type Extracted<T, U> = T extends U? T: never;

type BB = Extracted<number | string | boolean,  string>;

// Extracted<number, string> |
// Extracted<string, string> |
// Extracted<boolean, string>
// => never | string | never

// 결과 => string


// 분산을 방지하고 싶다면 꺽새가 아닌 대괄호로 감싸주면 된다
type StringNumberSwitch2<T> = [T] extends [number] ? string :number;