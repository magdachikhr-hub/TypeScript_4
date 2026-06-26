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
//polimorphism
class Car {
    constructor() { }
    getEmblem() {
        return "🚗";
    }
}
class SportsCar extends Car {
    getEmblem() {
        return "🏎️💨";
    }
}
const formula1 = new SportsCar();
console.log(formula1.getEmblem());
const mersedes = new Car();
console.log(mersedes.getEmblem());
//example
class ProgrammingLanguage {
    constructor() { }
    getObject() {
        return "object in the language";
    }
}
class Javascript extends ProgrammingLanguage {
    getObject() {
        return `{name: "magda", age = 20}`;
    }
}
class C extends ProgrammingLanguage {
    getObject() {
        return `typedef struct {int speed;int gear;} Car`;
    }
}
const programming1 = new Javascript();
console.log(programming1.getObject());
const programming2 = new C();
console.log(programming2.getObject());
const mainProgram = new ProgrammingLanguage();
console.log(mainProgram.getObject());
//another way
// class ProgrammingLanguage1 {
//   getObject() {
//     return "object";
//   }
// }
// class Javascript1 extends ProgrammingLanguage1 {
//   override getObject() {
//     return '{name = "natia", age = 23}';
//   }
// }
// class C extends ProgrammingLanguage1 {
//   override getObject() {
//     return "typedef struct {int speed;int gear;} Car;";
//   }
// }
// const generalLanguage = new ProgrammingLanguage1();
// const js = new Javascript1();
// const c = new C();
// console.log(generalLanguage.getObject());
// console.log(js.getObject());
// console.log(c.getObject());
// Abstraction
class CoffeMachine {
    makeCofee() {
        this.#addWater();
        this.#addCoffe();
    }
    #addWater() {
        console.log("added water");
    }
    #addCoffe() {
        console.log("added coffee");
    }
}
const coffee = new CoffeMachine();
console.log(coffee.makeCofee());
//
const date = new Date();
console.log(date);
//# sourceMappingURL=main.js.map