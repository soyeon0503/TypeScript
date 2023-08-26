// 유틸리티 타입
// 타입스크립트가 자체적으로 제공하는 특수한 타입으로 타입을 조작하는 기능을 이용해 실무에서
// 자주 쓰이는 유용한 타입들을 모아 놓은 것이다

//  맵드 타입 기반의 유틸리티 타입들
// 따라서 partial<Post>타입은 모든 프로퍼티가 선택적 프로퍼티가 된 Post 타입과 똑같다
interface Post{
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

const draft: Partial<Post> = {
    title: '제목',
    content: '초안',
}

type Partial<T> = {
    [key in keyof T] : T[key];
}

const draft2: Partial<Post> = {
    title: 'title',
    content: '초안...',
}

// Required : 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 변환한다
// '-?'를 프로퍼티 이름 뒤에 붙여주면 된다
type Required<T> = {
    [key in keyof T]: T[key];
};
  
const withThumbnailPost: Required<Post> = { 
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    // thumbnailURL: "https://...",
};
