// indexed Access Type
// 인덱스를 이용해서 다른 타입 내에 특정 프로퍼티 내의 타입을 추출하는 것이다.
// 객체, 배열, 튜플 모두 사용가능하다
// index에는 <타입>이 들어간다. 이 타입은 변수가 들어갈 수 없으며 문자리터럴과 같은 값만 허용한다.
function printAuthorInfo(author) {
    console.log(`${author.name} - ${author.id}`);
}
const post = {
    title: 'title',
    content: 'Contents',
    author: {
        id: 1,
        name: 'lee',
        age: 44,
        location: 'tokyo'
    },
};
// index에는 <타입>이 들어간다. 이 타입은 변수가 들어갈 수 없으며 문자리터럴과 같은 값만 허용한다.
function printListInfo(author) {
    console.log(`${author.name} - ${author.id}`);
}
// 인덱스로 배열의 요소를 추출해온다.
// 0은 값이 아니라 타입이므로 변수가 들어올 수 없다.
const postList = {
    title: 'title',
    content: 'Contents',
    author: {
        id: 1,
        name: 'lee',
        age: 44,
        location: 'tokyo'
    },
};
printListInfo(postList.author);
export {};
