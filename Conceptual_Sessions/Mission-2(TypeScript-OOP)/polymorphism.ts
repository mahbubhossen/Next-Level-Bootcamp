{
    class Animal{
        makeSound(){
            console.log("Animal is making sound");
        }
    }

    class Dog extends Animal{
        makeSound(){
            console.log("Dog is barking");
        }
    }

    class Cat extends Animal{
        makeSound(){
            console.log("Cat is meowing");
        }
    }

    const animal = new Animal();
    const dog = new Dog();
    const cat = new Cat();

    animal.makeSound();
    dog.makeSound();
    cat.makeSound();
}