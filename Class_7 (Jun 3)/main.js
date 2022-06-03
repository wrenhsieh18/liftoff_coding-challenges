class Person {
    name;
    age;
  
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    compareAge(person) {
      if (person.age > this.age) {
        console.log(person.name + " is older than me.");
      } else if (person.age < this.age) {
        console.log(person.name + " is younger than me.");
      } else {
        console.log(person.name + " is the same age as me.");
      }
    }
  }
  
  let p1 = new Person("Samuel", 24);
  let p2 = new Person("Joel", 36);
  let p3 = new Person("Lily", 24);
  
  p1.compareAge(p2);
  p2.compareAge(p1);
  p1.compareAge(p3);