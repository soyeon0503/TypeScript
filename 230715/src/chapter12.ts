// Promise Object


const promise = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20);
    },3000);
});

promise.then((res)=>{
    console.log(res); //20
    console.log(res * 10); //res -> unknown type
});

// 프로미스를 반환하는 함수의 타입을 정의
interface Post{
    id: number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post>{
    return new Promise(()=>{
        setTimeout((resolve, reject)=>{
            resolve({
                id : 1,
                title : 'title',
                content : 'comment',
            });
        }, 3000);
    });
}

const postRequest = fetchPost();
postRequest.then((post)=>{
    post.id;
});