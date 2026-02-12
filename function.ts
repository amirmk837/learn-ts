/////////////////////////////////////////////////////number
function perspolis(): number {
  const names = [
    "alipour",
    "niazmand",
    "kanani",
    "soroush",
    "khodabande",
    "milad",
  ];
  return names.length;
}

console.log("number function");
console.log(perspolis());
//////////////////////////////////////////////////////////string
function perspolis2(player: number): string[] {
  const names = [
    "alipour",
    "niazmand",
    "kanani",
    "soroush",
    "khodabande",
    "milad",
  ];

  return names.slice(0, player);
}

console.log("string function");
console.log(perspolis2(3));
////////////////////////////////////////////////// void
// function showalert(): void {
//   alert("message");
// }
// showalert();
/////////////////////////////////////////////////arrow
let greet: (name: string) => string;

greet = function (name: string): string {
  return "hello" + " " + name;
};

console.log("arrow function");

console.log(greet("ehsan"));
/////////////////////////////////////////////////type

type mathFunction = (X: number, Y: number) => number;

let X: number = 8;
let Y: number = 6;

const add: mathFunction = (X, Y) => X + Y;
const substract: mathFunction = (X, Y) => X - Y;
const multiply: mathFunction = (X, Y) => X * Y;

console.log("type calculatot");

console.log({
  add: add(X, Y),
  substract: substract(X, Y),
  multiply: multiply(X, Y),
});
/////////////////////////////////////////////////interface
interface calculator {
  add: (x: number, y: number) => number;
  substract: (x: number, y: number) => number;
  multiply: (x: number, y: number) => number;
  divide: (x: number, y: number) => number;
}

const mycalculator: calculator = {
  add: (x, y) => x + y,
  substract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
};
console.log("interface calculatot");

console.log("add = " + mycalculator.add(7, 5));
console.log("substract = " + mycalculator.substract(4, 2));
console.log("multiply = " + mycalculator.multiply(3, 8));
console.log("divide = " + mycalculator.divide(40, 5));
///////////////////////////////////////////////////////// if function
function buildName(firstName: string = "abbas", lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

console.log(buildName());
