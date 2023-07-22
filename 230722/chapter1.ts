// promise

import { resolve } from "path";

// promise는 제네릭 클래식 기반으로 타입이 선언되어 있기 때문에 타입변수로 선언을 해야한다.
// 타입변수로 비동기 처리의 결과값의 타입을 지정해줄 수 있지만 실패했을 때의 타입은 지정해줄 수 없다.
// 타입스크립트는 promise의 결과값을 자동으로 추론하는 기능이 없기 때문에 비동기의 결과값을 타입변수에 할당해야한다. 
// 타입변수가 없으면 unkown 타입으로 지정된다. 

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve(20);
        // reject이 인수는 any타입이기때문에 아무거나 넣어도 된다.
        reject("error message");
    },3000); 
});

promise.then((res) => {
    console.log(res * 10);
})

promise.catch((err)=> {
    if(typeof err === 'string'){
        console.log(err);
    }
});

interface Post {
    id : number;
    title : string;
    content : string;
}

function fetchPost() {
    return new Promise<Post>((resolve, reject)=>{
        setTimeout(()=> {
            resolve({
                id : 1,
                title : 'hey',
                content: 'contents',
            });
        }, 3000);
    });
}

const postRequest = fetchPost();

postRequest.then((post)=>{
    post.id;
});