// ## **01.String_Concatenation**

console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1 + 2}`);

// \n 줄바꿈 과 \로 기호 표기해주기 
console.log("mini's \nnote");
console.log('mini\'s note');


// ## **Numeric_operators**

console.log(1 + 1); // add
console.log(1 - 1); // substract 
console.log(1 / 1); // divide
console.log(1 * 1); // multiply 
console.log(5 % 2); // remainder 나누고 나머지 값 
console.log(2 ** 3); // exponentiation 2의 3승 


// ## **++,--operatiors**
let counter = 2;
const preIncrement = ++counter; //앞에 붙으면 바로 업데이트되어 할당

// 위 코드는 아래 주석 처리된 코드와 동일하다.
// counter = counter + 1; 
// preIncrement = counter;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; //뒤에 붙으면 할당한 후 업데이트

// 위 코드는 아래 주석 처리된 코드와 동일하다.
// preIncrement = counter;
// counter = counter + 1; 

console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);



// ## **=operators**

let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;


// ## **<=operators**

console.log(10 < 6); // less than 
console.log(10 <= 6); // less than or equal 
console.log(10 > 6); // greater than 
console.log(10 >= 6); // greater than or equal 



// ## **Logical_operators**

const value1 = false;
const value2 = 4 < 2;
// || (or) 

console.log(`or: ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('🤯');
  }
  return true;
}



// &&(and) 예제 



console.log(`and: ${value1 && value2 && check()}`);
// 위 세가지가 모두 true가 되야지 true를 리턴하는 아이

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('🤯');
  }
  return true;
}

function test(){

} 
      