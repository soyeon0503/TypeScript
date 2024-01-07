// 타입 별칭
type User = {
    id : number;
    name : string;
    nickname : string;
    birth : string;
    bio : string;
    location : string;
}

// let user:{
//     id : number;
//     name : string;
//     nickname : string;
//     birth : string;
//     bio : string;
//     location : string;
// } ={
//     id : 1,
//     name : "sy",
//     nickname : "dobby",
//     birth : "2000.01.01",
//     bio : "hello",
//     location : "tokyo",
// };

let user:User={
    id : 1,
    name : "sy",
    nickname : "dobby",
    birth : "2000.01.01",
    bio : "hello",
    location : "tokyo",
};

// 인덱스 시그니처
// 만약 국가코드 객체를 만든다고 했을 때, 원래대로라면 전 세계 국가의 프로퍼티를 만들어 타입을 지정해줘야할 것이다
// 하지만 그건 너무 귀찮고, 양이 많다
// 우리는 국가 코드 객체에서 하나의 규칙을 찾아낼 수 있는데, 키와 벨류값이 모두  string이라는 것이다
// 키가 스트링타입이고 밸류가 스트링 타입인 프로퍼티들을 모두 허용하는 타입을 만들면 200개가 넘는 국가를 일일히 선언하지 않아도
// 사용할 수 있다
// 이렇게 키와 밸류의 규칙을 기준으로 객체의 type을 정의하는 문법이 바로 index signature 문법이다

// type countryCodes = {
//     Korea : string;
//     UnitedState : string;
//     UnitedKingdom : string;
// };

// type CountryCodes = {
//     [key : string] : string;
// };

// let countryCodes : CountryCodes = {
//     Korea : "ko",
//     UnitedState : "us",
//     UnitedKingdom : "uk",
// };


// 특정 프로퍼티는 규칙과 다른 타입을 선언하고 싶다면 추가하면된다
type CountryCodes = {
    [key : string] : number;
	Korea : number ;
};

let countryCodes : CountryCodes = {
    Korea :122
};
    