// void 타입
// 아무것도 없음을 의미하는 타입으로 

// 이 암수는 string타입을 return하고 있기 때문에 string타입을 지정해준다.
function func():string{
    return "hello";
}

// 이 함수는 아무것도 반환하지 않으므로 void타입을 지정해준다.
function func2() : void{
    console.log("hi");
}


// void타입은 함수는 물론 변수에도 지정할 수 있다.
// 변수에 지정할 경우 undefined 이외의 값은 가질 수 없다. 하지만 config에서 strictNullChecks 값을 false로 하면 null값을 담을 수 있따. 


// never타입
// return 자체가 불가능한 타입일 때 never을 정의한다.
