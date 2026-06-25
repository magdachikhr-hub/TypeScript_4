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
