{
  class Animal {
    name: string;
    dob: string;
    sound: string;

    constructor(name: string, dob: string, sound: string) {
      this.name = name;
      this.dob = dob;
      this.sound = sound;
    }

    getAge() {
      const age = Date.now() - new Date(this.dob).getTime();
      return Math.floor(age / (1000 * 60 * 60 * 24 * 365));
    }
  }

  class Dog extends Animal {
    sound: string;

    constructor(name: string, dob: string, sound: string) {
      super(name, dob, sound);
      this.sound = sound;
    }
    makeSound() {
      return `${this.name} says ${this.sound}`;
    }
  }

  class Cat extends Animal {
    sound: string;

    constructor(name: string, dob: string, sound: string) {
      super(name, dob, sound);
      this.sound = sound;
    }
    makeSound() {
      return `${this.name} says ${this.sound}`;
    }
  }

  const dog = new Dog("Dogesh bhai", "2022-01-01", "ghew ghew");
  console.log(dog.getAge());
  console.log(dog.makeSound());

  const cat = new Cat("Cat bhai", "2020-01-01", "meow meow");
  console.log(cat.getAge());
  console.log(cat.makeSound());
}
