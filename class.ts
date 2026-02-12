class product {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean = true;
  tags: string[] = [];

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

const product1 = new product(1, "amir", 100000);

product1.tags.push("asdasd", "asdasd");

console.log(product1);

class user {
  username: string;
  age: number;
  email: string;
  job: string[];

  constructor(username: string, age: number, email: string) {
    this.username = username;
    this.age = age;
    this.email = email;
    this.job = [];
  }
}

const user1 = new user(
  "amir-mk",
  21,
  "amirmk837@getParsedCommandLineOfConfigFile.com",
);

user1.job.push("baghali");

console.log(user1);
