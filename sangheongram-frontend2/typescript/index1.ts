const sangheon = {
  name: "Sangheon",
  age: 23,
  hungry: true
};

const yerin = {
  name: "Yerin",
  hungry: false
};

// ?를 붙이면 생략이 가능하다 그렇지 않으면 들어있지 않을경우 작동 X
interface IHuman {
  name: string;
  age?: number;
  hungry: boolean;
}

const helloToHuman = (human: IHuman) => {
  console.log(`Hello ${human.name} you are ${human.age} old`);
};

helloToHuman(sangheon);
helloToHuman(yerin);
