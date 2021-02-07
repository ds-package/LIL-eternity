// Function
// 프로그램을 구성하는 가장 기본적인 빌딩블럭
// subprogram이라고도 불리고 여러번 재사용이 가능하다
// 한가지 테스크나 어떤 값을 계산하기 위해 쓰인다.

// 01. function declaration(선언)
// function name(param1, param2){body...return;}
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHi() {
  console.log('HI');
}
printHi();



function log(message) {
  console.log(message);
}
log('hello');
log(1234);


// Parameters
// premitive parameters : passed by value
// object parameters : passed by reference

function changeName(obj) {
  obj.name = '디자이너';
}
const minhee = { name: 'minhee' };
changeName(minhee);
console.log(minhee);


// Default Parameters 

function showMessage(message, from = 'unknown') {


  console.log(`${message} by ${from}`);
}

showMessage('hi!');

// Rest Parameters

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg)
  }

  args.forEach((arg) => console.log(arg));

}

printAll('플랫폼', '디자이너', 'minhee');



// Local scope

let globalMessage = 'global';

function printMsg() {
  let message = '잠을자고싶어';
  console.log(message);
  console.log(globalMessage);

  function printAnother() {
    console.log(message);
    let AnotherMessage = '출근은하기싫어';
    console.log(AnotherMessage);
  }
  printAnother()
}

printMsg();


// Return


function sum(a, b) {
  return a + b;
}

const result = sum(1, 2); //3

console.log(`sum: ${sum(1, 2)}`);

// Early Return

function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// Function Expression

const print = function () {
  console.log('print');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// Callback hell

function randomQa(answer, printYes, printNo) {
  if (answer === 'i love you') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log('Yes');
};

const printNo = function print() {
  console.log('No');
};

randomQa('wrong', printYes, printNo);
randomQa('i love you', printYes, printNo);

// Arrow Function

const simpleFc = function () {
  console.log('simplePrint!');
};
simpleFc();

const simpleFunction = () => console.log('moreSimplePrint!');
simpleFunction();

const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
  // do Something more 
  return a * b;
}


//IIFE

(function whatTheIife() {
  console.log('IIEF');
})();
