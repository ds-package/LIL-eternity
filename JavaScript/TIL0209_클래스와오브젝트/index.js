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


// 03.Public&Private

class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 04.Static

class Article {
  static publisher = 'minhee good';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();


//  05.상속과다양성

class shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color !!!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends shape { }
class Triangle extends shape {
  draw() {
    super.draw();
    console.log(`🔺🔺🔺🔺🔺`)
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectagle = new Rectangle(20, 20, `blue`);

rectagle.draw();
console.log(rectagle.getArea());

const triangle = new Triangle(20, 20, `red`);

triangle.draw();
console.log(triangle.getArea());


// 06.instanceOf

console.log(rectagle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof shape);
console.log(triangle instanceof Object);