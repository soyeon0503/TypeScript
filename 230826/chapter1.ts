//Infer (Inference) : 타입 추론
type FuncA = () => string;
type FuncB = () => number;
// T가 서브타입이면 string을 return 하고 아니면 never를 return
type ReturnType<T> = T extends () => infer R ? R : never;

type A1 = ReturnType<FuncA>;
type B1 = ReturnType<FuncB>;
type C1 = ReturnType<number>;

// Promise타입의 
type PromiseUnpack<T> = T extends Promise<infer R>? R : never;

type PromiseA = PromiseUnpack<Promise<string>>;
