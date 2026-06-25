import { user } from "./source/script.js";
console.log(user.mail);
class Animal {
    mammal;
    constructor() {
        this.mammal = true;
    }
    isMammal() {
        return `this animal is a mammal - ${this.mammal}`;
    }
}
const newAnimal = new Animal();
console.log(newAnimal.isMammal());
//inheritance // oop
class Dog extends Animal {
    bark;
    constructor() {
        super();
        this.bark = "woof";
    }
    isBarking() {
        return `this dog said ${this.bark}`;
    }
}
const dog = new Dog();
console.log(dog.isMammal());
console.log(dog.isBarking());
// encapsulation
class Person {
    #idNumber;
    name;
    constructor(id, name) {
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
const person1 = new Person("5449493", "magda");
console.log(person1);
console.log(person1.isAllowed());
// console.log(person1.#idNumber);
//# makes it private
//Property '#idNumber' is not accessible outside
//class 'Person' because it has a private identifier.
//# sourceMappingURL=main.js.map