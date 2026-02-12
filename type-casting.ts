let someValue: unknown = "any string word";

let strlength: number = (someValue as string).length;

let strlength2: number = (<string>someValue).length;

console.log(strlength);
console.log(strlength2);
