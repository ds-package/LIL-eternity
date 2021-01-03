
'use strict';

// ## **02-01.Variable**

let globalName = 'global name';

{
  let minhee = 'name';
  console.log(minhee);
  minhee = 'hello';
  console.log(minhee);
  // console.log(globalName);
}

// console.log(minhee);
console.log(globalName);


// ## ** 02 - 02.Constant **
//- security 보안에 좋고 
// - thread safety 음? 
// - raduce human mistakes 실수를 줄이기에도 좋다 

const ima = 'human';


// ## **02-03.VariableTypes**
// ### **primitive type**

// - **`number`** 

const count = 17;
const size = 19.2;

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const nAn = 'not a number' / 2;
const testConsoleA = 1 / 0;
const testConsoleB = -1 / 0;

console.log(nAn);
console.log(testConsoleA);
console.log(testConsoleB);

// - **`string`** 

const char = 'c';
const apple = 'apple';
const greeting = 'hello' + apple;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloJuni = `hi ${apple}!`;


console.log(`value: ${helloJuni}, type: ${typeof helloJuni}`);


// - **`boolean`**

const canRead = true;
const testFse = 3 < 1;

console.log(`value: ${canRead}, type : ${typeof canRead}`);
console.log(`value: ${testFse}, type : ${typeof testFse}`);



//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);


//- **`symbol`**

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);


const gSymbol2 = Symbol.for('id');
const gSymbol1 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


//-  **`object`**
const itzy = {
  name: '잇지',
  member: 6
};

itzy.name = '있지';
console.log(itzy.name)


//## **03.DynamicTyping**

let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));


