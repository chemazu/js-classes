//polymorphism: this is when an instance overides a method in the parent class

class Animal {
    constructor(name, age) {
      this.name = name;
    }
    makeSound() {
      console.log(`Generic animal sounds`);
    }
    runAround() {
        console.log("run around");
      }
    //   this will be overwritten
  
  }
  
  // Dog extends Animal
  class Dog extends Animal {
    constructor(name) {
      super(name)
  
    }
    runAround(){
        super.runAround()
        console.log("doesnt run around")
    }
   }
   let bigDog = new Dog("paul")
  bigDog.makeSound()
  bigDog.runAround()