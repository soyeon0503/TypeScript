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


// 특정 프로퍼티를 포함하고 싶을 때
type CountryCodes = {
    [key : string] : number;
	Korea : number ;
};

let countryCodes : CountryCodes = {
    Korea :122
};
    