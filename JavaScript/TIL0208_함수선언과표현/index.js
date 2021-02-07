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

// Rest Parameters**

function printAll(...args) {

}