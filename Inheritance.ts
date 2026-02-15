class Animal {
  name: string;
  constructor(name: string, sound: string) {
    this.name = name;
  }
  makeSound(): string {
    return "woof";
  }
}

class dog extends Animal {
  fast: boolean;

  constructor(fast: boolean, name: string, sound: string) {
    super(name, sound);
    this.fast = fast;
  }
}

const Dog = new dog(true, "jesi", "woof");

const cow = Dog.makeSound();

console.log(Dog.fast, Dog.name, cow);
