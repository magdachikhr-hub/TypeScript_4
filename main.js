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
//inheritance
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
//# sourceMappingURL=main.js.map