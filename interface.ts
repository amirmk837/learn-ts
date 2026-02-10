interface data {
  name: string;
  age: number;
}

interface data {
  phoneNumber: number;
  family: string;
  registered: boolean;
}

const user: data = {
  name: "amir",
  age: 21,
  phoneNumber: +9020000341,
  family: "kazemi",
  registered: true,
};

console.log(user);
//   {name: "amir",
//   age: 21,
//   phoneNumber: +9020000341,
//   family: "kazemi",
//   registered: true}

interface animal {
  legs: number;
  from: string;
}

interface dog extends animal {
  sounds: string;
  bigAnimal: false;
}

let mydog: dog = {
  legs: 4,
  from: "earth",
  bigAnimal: false,
  sounds: "woof",
};

console.log(mydog);
// legs: 4,
// from: "earth",
// bigAnimal: false,
// sounds: "woof",
