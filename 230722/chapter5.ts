// 템플릿 리터럴 타입

type Color = "red" | "block" | "green";
type Animal = "dog" | "cag" | "chicken";
// type ColorAnimal = "red-dog" | "red-cat"|"red-chicken"|"black-dog";
type ColorAnimal = `${Color}-${Animal}`;
