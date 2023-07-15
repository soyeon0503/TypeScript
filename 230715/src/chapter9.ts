// map method

function map<T, U>(arr: T[], callback: (item: T )=> U){
    let result = [];
    for(let i = 0;i<arr.length;i++){
        result.push(callback(arr[i]));
    }

    return result;
}

// map(arr, (it) => it *2);
// ok
map(['hi', 'hello'], (it) => it.toUpperCase());

// Error 처음에 함수를 호출했을 대 T의 타입은 string 값인데 이 함수는 반환값이 num이 되버려 오류가 난다.
// 그래서 타입변수를 하나 더 선언하여 콜백함수의 반환값은 별도로 지정해야한다.
map(['hi', 'hello'], (it) => parseInt(it));


// forEach
const arr2 = [1, 2, 3];

// forEach 함수는 반환값이 없으므로 void로 타입지정해도 괜찮다
function forEach<T>(arr:T[], callback:(item : T)=> void){
    for(let i =0;i<arr.length;i++){
        callback(arr[i]);
    }
}

forEach(arr2, it => {
    console.log(it.toFixed());
});

