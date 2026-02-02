// oop : class -> object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound(){
//     console.log(`${this.name} is making sound: ${this.sound}`);
//   }
// }

// create object from class

// const dog = new Animal("Dogesh bhai", "dog", "ghew ghew");
// const cat = new Animal("Cat bhai", "cat", "meow meow");
// console.log(dog.name);
// console.log(cat.sound);

// dog.makeSound();
// cat.makeSound();

// parameter properties
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}
  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}

const dog = new Animal("Dogesh bhai", "dog", "ghew ghew");
const cat = new Animal("Cat bhai", "cat", "meow meow");
console.log(dog.name);
console.log(cat.sound);
dog.makeSound();
cat.makeSound();
