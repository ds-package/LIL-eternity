'use strict';
// object-orendted progrming
// class : template 
// object : instance of a calss
// js classes 
// -  introduced in ES6
// - syntactical sugar over prototype-based inheritance


// class 선언 

class Person {
  // constructor 생성자 
  constructor(name, age) {
    // fields 
    this.name = name;
    this.age = age;
  }

  //methods 메소드 
  speak() {
    console.log(`${this.name}: hello!`)
  }
}


const minhee = new Person('minhee', 27);
console.log(minhee.name);
console.log(minhee.age);
minhee.speak();

//02.Getter&Setter

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error(`age can not be negative`);
    // }

    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);