// indexed Access Type
// 인덱스를 이용해서 다른 타입 내에 특정 프로퍼티 내의 타입을 추출하는 것이다.
// 객체, 배열, 튜플 모두 사용가능하다

import { type } from "os";

// 객체
interface Post {
    title : string,
    content : string,
    author : {
        id : number;
        name : string;
        age : number;
        location : string;
    };
}

// index에는 <타입>이 들어간다. 이 타입은 변수가 들어갈 수 없으며 문자리터럴과 같은 값만 허용한다.
function printAuthorInfo(author : Post["author"]){
    console.log(`${author.name} - ${author.id}`);
}

const post : Post = {
    title : 'title',
    content : 'Contents',
    author : {
        id : 1,
        name : 'lee',
        age : 44,
        location : 'tokyo'
    },
}

// 배열
type PostList = {
    title : string,
    content : string,
    author : {
        id : number;
        name : string;
        age : number;
        location : string;
    };
}[];

// index에는 <타입>이 들어간다. 이 타입은 변수가 들어갈 수 없으며 문자리터럴과 같은 값만 허용한다.
function printListInfo(author : PostList[number]["author"]){
    console.log(`${author.name} - ${author.id}`);
}

// 인덱스로 배열의 요소를 추출해온다.
// 0은 값이 아니라 타입이므로 변수가 들어올 수 없다.
const postList : PostList[0] = {
    title : 'title',
    content : 'Contents',
    author : {
        id : 1,
        name : 'lee',
        age : 44,
        location : 'tokyo'
    },
}
printListInfo(postList.author);


// 튜플

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];


