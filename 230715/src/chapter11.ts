// 제네릭 클래스
// 생성자 함수에 전달하는 인수로 타입을 추론한다. 

// class NumberList {
//     constructor(private list: number[]) {}

//     push(data : number){
//         this.list.push(data);
//     }

//     pop(){
//         return this.list.pop();
//     }

//     print(){
//         console.log(this.list);
//     }
// }

class List<T> {
    constructor(private list: T[]) {}

    push(data : T){
        this.list.push(data);
    }

    pop(){
        return this.list.pop();
    }

    print(){
        console.log(this.list);
    } 
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(['1','2','3']);