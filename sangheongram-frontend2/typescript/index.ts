// ts를 이용해서 매개변수의 형식을 지정해주고 :string이런식으로 리턴값도 타입지정 가능
const greet = (name: string, age: number): string => {
  return `Hello ${name} you are ${age} years old`;
};

console.log(greet("Nicolas", 18));
