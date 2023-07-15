// 인터페이스와 클래스

interface CharacterInterface {
    name : string;
    moveSpeed : number;
    move() : void;
}

// implements 인터페이스를 사용할 때 쓰는 것으로 클래스가 인터페이스의 구조를 구현할 때 쓴다. 
// 인터페이스의 필드들은 다 public이여야 한다..
class Character implements CharacterInterface{
    name : string;
    moveSpeed: number;
    constructor(name: string, moveSpeed : number){
        this.name = name;
        this.moveSpeed = moveSpeed;
    }

    move():void {
        console.log(`${this.moveSpeed} move!`);
    }
}

