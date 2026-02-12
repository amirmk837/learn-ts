///////////////////////////////////////////////////////////////// Public Access
class person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public sayHello() {
    console.log(`Hi my name is ${this.age} and I have ${this.age} years old`);
  }
}

const person1 = new person("amir", 21);
console.log(person1);
person1.sayHello();

//////////////////////////////////////////////////////////////////////////////////// Private Access

class bankAccount {
  public user: string;
  public cardNumber: number;
  private balance: number;

  constructor(user: string, cardNumber: number, initialBalance: number) {
    this.user = user;
    this.cardNumber = cardNumber;
    this.balance = initialBalance;
  }

  public deposit(amount: number) {
    if (amount) {
      this.balance += amount;
      console.log(`${amount} dollars deposited to account`);
    }
  }

  public getNumber() {
    return this.cardNumber;
  }

  public password: number = 1234;
}

const myAccount = new bankAccount("amir", 6037997377377107, 5000);

console.log(myAccount.getNumber());

myAccount.deposit(6000);
