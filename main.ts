import { user } from "./source/script.js";

console.log(user.mail);

class Animal {
  mammal: boolean;
  constructor() {
    this.mammal = true;
  }

  isMammal(): string {
    return `this animal is a mammal - ${this.mammal}`;
  }
}

const newAnimal: Animal = new Animal();
console.log(newAnimal.isMammal());

//inheritance // oop

class Dog extends Animal {
  bark: string;
  constructor() {
    super();
    this.bark = "woof";
  }

  isBarking(): string {
    return `this dog said ${this.bark}`;
  }
}

const dog: Dog = new Dog();
console.log(dog.isMammal());
console.log(dog.isBarking());

// encapsulation

class Person {
  #idNumber: string;
  name: string;

  constructor(id: string, name: string) {
    this.#idNumber = id;
    this.name = name;
  }

  isAllowed() {
    if (this.#idNumber.length < 6) {
      return false;
    }
    return true;
  }
}

const person1: Person = new Person("5449493", "magda");
console.log(person1);
console.log(person1.isAllowed());
// console.log(person1.#idNumber);

//# makes it private
//Property '#idNumber' is not accessible outside
//class 'Person' because it has a private identifier.

//polimorphism

class Car {
  constructor() {}
  getEmblem(): string {
    return "🚗";
  }
}

class SportsCar extends Car {
  override getEmblem(): string {
    return "🏎️💨";
  }
}

const formula1 = new SportsCar();
console.log(formula1.getEmblem());

const mersedes = new Car();
console.log(mersedes.getEmblem());

//example

class ProgrammingLanguage {
  constructor() {}
  getObject(): string {
    return "object in the language";
  }
}

class Javascript extends ProgrammingLanguage {
  override getObject(): string {
    return `{name: "magda", age = 20}`;
  }
}

class C extends ProgrammingLanguage {
  override getObject(): string {
    return `return "typedef struct {int speed;int gear;} Car;`;
  }
}

const programming1 = new Javascript();
console.log(programming1.getObject());

const programming2 = new C();
console.log(programming2.getObject());

const mainProgram = new ProgrammingLanguage();
console.log(mainProgram.getObject());

//
