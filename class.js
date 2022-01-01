//Inheritance and Extends

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    console.log(`i am ${this.name} and i am ${this.age} years old`);
  }
}

// Programmer extends Person it inherits all the feature of Person
class Programmer extends Person {
  constructor(name, age, experience) {
    super(name, age)

    this.name = name;
    this.age = age;
    this.experience = experience;
    //custom cbehavior
    

  }
  describeProgrammer(){
    console.log(`i am ${this.name} and i am ${this.age} years old with ${this.experience} years of programming`);
  }
}

const array1 = ['a', 'b', 'c'];





let person1 = new Person("Mazu", 24)
person1.describe()
 let programmer1 = new Programmer("Mazu", 24,40)
programmer1.describe()
programmer1.describeProgrammer()
