/*
* 서로소 유니온 타입 => 직관적으로 타입을 좁힐 수 있도록 객체 타입을 정의하는 방법
* : 교집합이 없는 타입들로만 만든 유니온 타입
* */

type Admin = {
	tag : 'ADMIN'
	name : string
	kickCount : number
}

type Member = {
	tag : 'MEMBER'
	name : string
	point : number
}

type Guest = {
	tag : 'GUEST'
	name : string
	visitCount : number
}

type User = Admin | Member | Guest

// Admin => {name}님 현재까지 {kickCount}명 강퇴했습니다
// Member => {name}님 현재까지 {point}모았습니다
// Guest => {name}님 현재까지 {visitCount}번 방문하셨습니다
// function login(user:User){
//     if('kickCount' in user){
//         console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`)
//     }else if('point' in user){
//         console.log(`${user.name}님 현재까지 ${user.point}명 모았습니다`)
//     }else if('visitCount' in user){
//         console.log(`${user.name}님 현재까지 ${user.visitCount}명 방문하셨습니다`)
//     }
// }

function login( user : User ) {
	switch ( user.tag ) {
		case 'ADMIN':
			console.log(`${ user.name }님 현재까지 ${ user.kickCount }명 강퇴했습니다`)
			break
		case "MEMBER":
			console.log(`${ user.name }님 현재까지 ${ user.point }명 모았습니다`)
			break

		case "GUEST":
			console.log(`${ user.name }님 현재까지 ${ user.visitCount }명 방문하셨습니다`)
			break
	}
}

//비동기 처리시