class Animal {
  constructor(name) {
    this.name = name
  } // this helps to create an object of the class with the properties name and age and their values
  // this above is a constructor method that will be called when a new object of this class is created
  makeSound() {
    console.log(`${this.name} sounds`)
  } // this is a method that will be inherited by all the classes that extend this class
}
// now we will create a class that extends the Animal class
class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} Barks`)
  }
}
// now we will create instances of the classes
const animal = new Animal("Animal")
animal.makeSound()
const dog = new Dog("Dog")
dog.makeSound()
